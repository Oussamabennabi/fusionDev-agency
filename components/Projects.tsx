"use client";
import React from "react";
import SectionContainer from "./SectionContainer";
import GridItem from "./GridItem";
import Image from "next/image";
import { Heading, P } from "./ui/Typography";

export function Projects() {
  return (
    <SectionContainer>
      <GridItem className="w-full mb-6">
        <Heading>OUR WORK.</Heading>
      </GridItem>
      <div className=" space-y-6">
        {work.map((c, i) => (
          <div
            className="
            border grid grid-cols-2 gap-6 rounded-xl border-gray-200/[.2] p-3 w-full"
            key={i}
          >
       
            <div className="space-y-6">
              <GridItem className="  !h-[350px] max-h-[350px]">
                <Heading type="h2">{c.title}</Heading>
                <P>{c.description}</P>
              </GridItem>
              {/* make the background that coding effect in acenrty... */}
              <GridItem className="!h-[250px] max-h-[250px]">
                <h1>{c.title}</h1>
              </GridItem>
            </div>
                 
            <GridItem className="p-0 !h-full max-h-full">
              <Image
                src={c.thumbnail}
                height={400}
                width={400}
                className="rounded-xl h-full w-full"
                alt={c.title}
              />
            </GridItem>


            {/*  teck stack */}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
export const work = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    description: "hi",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    description: "hi",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    description: "hi",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    description: "Hi",
  },
];
