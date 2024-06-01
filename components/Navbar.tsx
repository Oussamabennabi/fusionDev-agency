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
        <Heading className="select-none">DX</Heading>

        <div className="lg:flex hidden justify-center gap-3 items-center">
          <Button className="text-xl font-semibold" variant={"secondary"}>
            Home
          </Button>
          <Button className="text-xl  font-semibold" variant={"secondary"}>
            Services
          </Button>
          <Button className="text-xl  font-semibold" variant={"secondary"}>
            Projects
          </Button>
          <Button className="text-xl  font-semibold" variant={"secondary"}>
            About
          </Button>
          <Button className="text-xl  font-semibold">Contact Us</Button>
        </div>

      </GridItem>
    </SectionContainer>
  );
}
