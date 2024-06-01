"use client";
import React from "react";
import SectionContainer from "./SectionContainer";
import GridItem from "./GridItem";
import { Heading, P } from "./ui/Typography";

export function Testimonials() {
  return (
    <SectionContainer>
      <div className=" rounded-xl w-full ">
        <GridItem className="w-full mb-6">
          <Heading>TESTIMONIALS.</Heading>
        </GridItem>
        <div className="grid  lg:grid-cols-2 grid-cols-1 gap-6">
          {content.map((c, i) => (
            <GridItem key={i}>
              <Heading type="h3">{c.title}</Heading>
              <P>{c.description}</P>
            </GridItem>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

const content = [
  {
    title: "Tailored Solutions",
    description: (
      <>
        <p>
          We understand that each business is unique, and we provide customized
          solutions that align with your specific needs and goals.
        </p>
      </>
    ),
  },
  {
    title: "Expert Team",
    description: (
      <>
        <p>
          Our team of experienced developers, designers, and digital marketers
          work together to deliver high-quality products.
        </p>
      </>
    ),
  },
  {
    title: "Cutting-Edge Technology",
    description: (
      <>
        <p>
          We stay updated with the latest technologies and trends to ensure our
          clients receive the best possible solutions.
        </p>
      </>
    ),
  },
  {
    title: "Client-Centric Approach",
    description: (
      <>
        <p>
          We prioritize our clients&apos; satisfaction and success, offering
          continuous support and maintenance even after project completion.
        </p>
      </>
    ),
  },
 
];
