import {
  Create,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
} from "react-admin";

export const ChallengeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="question" label="Question" />
        <SelectInput source="type" choices={["ASSIST", "SELECT"]} />
        <ReferenceInput source="lessonId" reference="lessons" />
        <NumberInput source="order" label="Order" />
      </SimpleForm>
    </Create>
  );
};
