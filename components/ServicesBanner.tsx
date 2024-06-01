import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const ServicesBanner = () => {
  return (
    <InfiniteMovingCards
      items={[
        { name: "UI/UX Designe" },
        { name: "Website Development" },
        { name: "Website Design" },
        { name: "Mobile App Development" },
      ]}
      direction="right"
      speed="fast"
    />
  );
};

export default ServicesBanner;
