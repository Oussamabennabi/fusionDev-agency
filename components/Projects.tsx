"use client";
import React from "react";
import SectionContainer from "./SectionContainer";
import GridItem from "./GridItem";
import Image from "next/image";
import { Heading, P } from "./ui/Typography";
import { Project } from "@/sanity/lib/types";
import { urlForImage } from "@/sanity/lib/image";

export function Projects({
  title,
  projects,
}: {
  title: string;
  projects: Project[] | [];
}) {
  return (
    <SectionContainer id="projects">
      <GridItem className="w-full mb-6">
        <Heading className="uppercase">{title}</Heading>
      </GridItem>
      <div className=" space-y-6">
        {projects.map((p, i) => (
          <GridItem
            className="
            border  gap-6 rounded-xl border-gray-200/[.2] p-1 w-full"
            key={i}
          >
            {/* <div className="space-y-6">
              <GridItem className="  !h-[350px] max-h-[350px]">
                <Heading type="h2">{p.title}</Heading>
                <P>{p.description}</P>
              </GridItem>
              <GridItem className="!h-[250px] max-h-[250px]">
                <h1>{p.title}</h1>
              </GridItem>
            </div> */}

            <Image
              src={urlForImage(p.previewImage.asset._ref)}
              height={1200}
              width={2732}
              priority
              quality={100}
              fetchPriority="high"
              className="rounded-xl h-full w-full object-cover"
              alt={p.title}
            />

            {/*  teck stack */}
          </GridItem>
        ))}
      </div>
    </SectionContainer>
  );
}
