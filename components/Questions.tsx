"use client";
import React from "react";
import SectionContainer from "./SectionContainer";
import GridItem from "./GridItem";
import { cn } from "@/utils/cn";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Heading, P } from "./ui/Typography";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { ArrowDownCircleIcon } from "lucide-react";
const AccordionItem = ({ header, ...rest }: any) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className="flex justify-between items-center w-full">
        {header}
        <ArrowDownCircleIcon
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
        />
      </div>
    )}
    className="bg-[#191919] rounded-xl"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left rounded-t-xl hover:rounded-xl transition-all hover:bg-[#262626] ${
          isEnter && "bg-[#2C2C2C]"
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200  ease-out",
    }}
    panelProps={{ className: "p-4 " }}
  />
);

const Questions = () => {
  return (
    <SectionContainer>
      <GridItem className="w-full mb-6">
        <Heading>FREAQUANTLY ASKED QUESTIONS.</Heading>
      </GridItem>
      <div className="grid grid-cols-3  gap-6 ">
        <div className="lg:col-span-2 col-span-3 space-y-6 ">
          <Accordion className="space-y-6" transition transitionTimeout={200}>
            {questions.map((c, i) => (
              <AccordionItem
                key={i}
                header={<Heading type="h3">{c.q}</Heading>}
                initialEntered={i === 0}
              >
                <P>{c.answer}</P>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <GridItem className="w-full lg:block col-span-1 hidden">
          <form className="my-8 w-full">
            <LabelInputContainer className="mb-4 ">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Oussama B" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="question">Question?</Label>
              <Input
                id="question"
                placeholder="projectmayhem@fc.com"
                type="tel"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send &rarr;
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </GridItem>
      </div>
    </SectionContainer>
  );
};
export const questions = [
  {
    q: "What are web development services?",
    answer:
      "Web development services include various activities involved in creating and maintaining websites. It has everything from designing and developing web pages, implementing functionality, integrating databases, and optimizing performance, to ensuring security.",
  },
  {
    q: "What are the main 3 types of web development?",
    answer:
      "Front-end, back-end, and full-stack development are the three main kinds of web development. Front-end development involves the creation of the user interface and user experience. Back-end development deals with server-side functionality and data management. Full-stack development consists in working on a website's front-end and back-end aspects.",
  },
  {
    q: "Rogue",
    answer: "hi",
  },
  {
    q: "Editorially",
    answer: "Hi",
  },
];

export default Questions;
export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
