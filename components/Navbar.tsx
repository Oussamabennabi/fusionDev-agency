"use client";
import React from "react";
import GridItem from "./GridItem";
import SectionContainer from "./SectionContainer";
import Button from "./ui/button";
import { Heading } from "./ui/Typography";

export function Navbar({ className }: { className?: string }) {
  return (
    <SectionContainer className="my-0 pb-0">
      <GridItem className="flex gap-3 items-center justify-between">
        <Heading className="select-none"><a href="/">DX</a></Heading>

        <div className="lg:flex hidden justify-center gap-3 items-center">
           
          <Button className="text-xl  font-semibold" variant={"secondary"}>
            <a href="/#services">Services</a>
          </Button>
          <Button className="text-xl  font-semibold" variant={"secondary"}>
            <a href="#projects">Projects</a>
          </Button>
          <Button className="text-xl  font-semibold" variant={"secondary"}>
            <a href="#about">About</a>
          </Button>
          <Button className="text-xl  font-semibold">
            <a href="#contactus">Contact Us</a>
          </Button>
        </div>

      </GridItem>
    </SectionContainer>
  );
}
