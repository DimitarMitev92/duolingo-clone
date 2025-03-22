import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/hr.svg"
            height={32}
            width={40}
            alt="Croatia"
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/es.svg"
            height={32}
            width={40}
            alt="Spain"
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/de.svg"
            height={32}
            width={40}
            alt="Germany"
            className="mr-4 rounded-md"
          />
          German
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/fr.svg"
            height={32}
            width={40}
            alt="France"
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            height={32}
            width={40}
            alt="Japan"
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/it.svg"
            height={32}
            width={40}
            alt="Italy"
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
      </div>
    </footer>
  );
};
