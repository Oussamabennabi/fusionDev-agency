"use client";
import React from "react";

import { cn } from "@/utils/cn";
import {} from "@tabler/icons-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div id="contact-us" className="flex h-screen md:flex-row    flex-col justify-center items-center w-full gap-10 ">
        <div className="w-full px-4 py-8 bg-white dark:bg-black text-gray-800 dark:text-gray-200">
  <div className="max-w-md mx-auto space-y-6">
    <div className="">
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
        We&apos;d love to hear from you! Get in touch with us using the information below.
      </p>
    </div>
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 00-8 0m8 0a4 4 0 010 8m0-8a4 4 0 100 8m0-8v8m0 0H8"></path>
        </svg>
        <span className="text-gray-700 dark:text-gray-300">+1 (123) 456-7890</span>
      </div>
      <div className="flex items-center space-x-4">
        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8zm-6 12V6m0 0L5 10m5-4l5 4"></path>
        </svg>
        <span className="text-gray-700 dark:text-gray-300">contact@fusiondevsolutions.com</span>
      </div>
      <div className="flex items-center space-x-4">
        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m5-6h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-6 2h-6a2 2 0 01-2-2v-6a2 2 0 012-2h6M7 10h.01M17 10h.01M7 14h.01M17 14h.01M9 17h6"></path>
        </svg>
        <span className="text-gray-700 dark:text-gray-300">1234 Fusion St, Tech City, TX 56789</span>
      </div>
      <div className="flex items-center space-x-4">
        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17v-5a4 4 0 10-8 0v5m8 0h-8m0 0v1a3 3 0 006 0v-1m-6 0h6"></path>
        </svg>
        <span className="text-gray-700 dark:text-gray-300">www.fusiondevsolutions.com</span>
      </div>
    </div>
  </div>
</div>

      <div className=" w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
  
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="Oussama B" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
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

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
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
