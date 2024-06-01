import React from "react";
import SectionContainer from "./SectionContainer";
import GridItem from "./GridItem";
import { Heading, P } from "./ui/Typography";

const GetInTouch = () => {
  return (
    <SectionContainer className="  gap-6">
      <GridItem className="bg-primary  p-12">
        <Heading className="uppercase">Ready to transform your digital presence?</Heading>
      </GridItem>
    </SectionContainer>
  );
};

export default GetInTouch;
