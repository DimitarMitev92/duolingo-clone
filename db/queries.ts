import { cache } from "react";
import db from "./drizzle";
import { eq } from "drizzle-orm";
import { userProgress, courses, units, challengeProgress } from "./schema";
import { auth } from "@clerk/nextjs/server";

export const getUserProgress = cache(async () => {
  const { userId } = await auth();

  if (!userId) return null;

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: { activeCourse: true },
  });

  return data;
});

export const getUnits = cache(async () => {
  try {
    const { userId } = await auth();
    const userProgress = await getUserProgress();

    if (!userId || !userProgress?.activeCourseId) return [];

    // TODO: Confirm whether order is needed
    const data = await db.query.units.findMany({
      where: eq(units.courseId, userProgress.activeCourseId),
      with: {
        lessons: {
          with: {
            challenges: {
              with: {
                challengeProgress: {
                  where: eq(challengeProgress.userId, userId),
                },
              },
            },
          },
        },
      },
    });

    const normalizedData = data.map((unit) => {
      const lessonWithCompletedStatus = unit.lessons.map((lesson) => {
        const allCompletedChallenges = lesson.challenges.every((challenge) => {
          return (
            challenge.challengeProgress &&
            challenge.challengeProgress.length > 0 &&
            challenge.challengeProgress.every(
              (challengeProgress) => challengeProgress.completed
            )
          );
        });

        return { ...lesson, completed: allCompletedChallenges };
      });

      return { ...unit, lessons: lessonWithCompletedStatus };
    });

    return normalizedData;
  } catch (error) {
    console.error("Error fetching units:", error);
    return [];
  }
});

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();
  return data;
});

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
    // TODO: Populate units and lessons
  });

  return data;
});
