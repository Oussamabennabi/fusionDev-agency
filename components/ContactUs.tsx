"use client";
import React from "react";

import { cn } from "@/utils/cn";
import {} from "@tabler/icons-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import SectionContainer from "./SectionContainer";
import GridItem from "./GridItem";
import { Heading, P } from "./ui/Typography";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <SectionContainer id="contactus">
      <div className="grid gap-6 grid-cols-2">
        <GridItem className="col-span-2 lg:col-span-1">
          <div className=" mx-auto space-y-6">
            <div className="">
              <Heading type="h1">CONTACT US.</Heading>
              <P>
                We&apos;d love to hear from you! Get in touch with us using the
                information below.
              </P>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="hover:text-primary transition-all"/>
                <span className="text-gray-700 dark:text-gray-300">
                  +213 (555) 23 77 97
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="hover:text-primary transition-all"/>{" "}
                <a href="mailto:oussama.bennabi.work@gmail.com" className="text-gray-700 dark:text-gray-300">
                  oussama.bennabi.work@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="hover:text-primary transition-all"/>
                <span className="text-gray-700 dark:text-gray-300">
                  Algeria Tlemcen, Ghazaouat 13020
                </span>
              </div>
            </div>
          </div>
        </GridItem>

        <GridItem className="col-span-2 lg:col-span-1">
          <form onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
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
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                placeholder="projectmayhem@fc.com"
                type="tel"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send &rarr;
              <BottomGradient />
            </button>
          </form>
        </GridItem>
      </div>
    </SectionContainer>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

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
