"use client";
import React from "react";
import SectionContainer from "./SectionContainer";
import GridItem from "./GridItem";
import { Heading} from "./ui/Typography";

export function WhyOurSolution() {
  return (
    <SectionContainer id="whyus">
      <div className=" rounded-xl  w-full ">
        <GridItem className="w-full mb-6">
          <Heading>REASONE TO CHOOSE US.</Heading>
        </GridItem>
        
      </div>
    </SectionContainer>
  );
}
