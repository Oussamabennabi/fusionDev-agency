"use client";
import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import GridItem from "./GridItem";
import { Heading, P } from "./ui/Typography";
import ServicesBanner from "./ServicesBanner";
import Button from "./ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
const heroItems = [
  {
    title: "Clients",
    label: "20+",
  },
  {
    title: "Projects",
    label: "30+",
  },
  {
    title: "SUCCESS",
    label: "100%",
  },
  {
    title: "Follower",
    label: "200+",
  },
  {
    title: "Experience",
    label: "3+ years",
  },
];
export function Hero({title,description,heroImage="/logo.png"}:{title:string,description:string,heroImage?:string}) {
  return (
    <>
      <SectionContainer className="mb-0 mt-0">
        <div className="grid gap-6 grid-cols-3">
          <GridItem className="h-full flex flex-col items-start justify-between lg:col-span-2 col-span-3  pt-20">
            <Heading className="uppercase my-auto">{title} WEBSITES.</Heading>
            <P>{description}
            </P>
            <div className="mt-auto w-full">
            <ServicesBanner />

            </div>
          </GridItem>
          <GridItem className="lg:block  hidden p-0">
            <Image src={heroImage} className="object-cover rounded-xl h-full w-full" alt="logo" width={500} height={500}/>
          </GridItem>
        </div>
      </SectionContainer>

      <SectionContainer className="my-0  pt-0">
        <div className=" rounded-xl h-full lg:flex-nowrap flex-wrap  w-full flex  justify-center items-center gap-6">
          {heroItems.map((item, i) => (
            <GridItem key={i} className="h-[112px] w-fit flex-1 text-center">
              <Heading className="uppercase " type="h3">{item.title}</Heading>
              <b className="text-3xl text-primary font-bold">{item.label}</b>
            </GridItem>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
