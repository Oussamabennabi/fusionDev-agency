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
export function Hero() {
  return (
    <>
      <SectionContainer className="mb-0 mt-0">
        <div className="grid gap-6 grid-cols-3">
          <GridItem className=" lg:col-span-2 col-span-3  pt-20">
            <Heading>DIGITAL SOLUTIONS THAT DRIVES SUCCESS.</Heading>
            <P>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
              necessitatibus?, Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ipsum, necessitatibus?,
            </P>
            <ServicesBanner />
          </GridItem>
          <GridItem className="lg:block hidden p-0">
            <Image src={"/logo.png"} className="object-cover rounded-xl h-full w-full" alt="logo" width={500} height={500}/>
          </GridItem>
        </div>
      </SectionContainer>

      <SectionContainer className="my-0 pt-0">
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
