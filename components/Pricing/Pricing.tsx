"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
const pricingData = [
  {
    title: "Basic Plan",
    smallDescription: "Perfect for small businesses and startups.",
    price: "$299",
    isMonth: true,
    featureList: [
      { title: "Custom Website Design" },
      { title: "5 Pages Included" },
      { title: "Responsive Design" },
      { title: "Basic SEO" },
      { title: "1 Month Support" },
    ],
  },
  {
    title: "Standard Plan",
    smallDescription: "Ideal for growing businesses needing more features.",
    price: "$499",
    isMonth: true,
    featureList: [
      { title: "Custom Website Design" },
      { title: "10 Pages Included" },
      { title: "Responsive Design" },
      { title: "Advanced SEO" },
      { title: "E-commerce Integration" },
      { title: "3 Months Support" },
    ],
  },
  {
    title: "Premium Plan",
    smallDescription:
      "Best for established businesses seeking comprehensive solutions.",
    price: "$999",
    isMonth: true,
    featureList: [
      { title: "Custom Website Design" },
      { title: "Unlimited Pages" },
      { title: "Responsive Design" },
      { title: "Advanced SEO" },
      { title: "E-commerce Integration" },
      { title: "Mobile App Development" },
      { title: "6 Months Support" },
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
    Pricing Plans Tailored for Your Business Needs
  </h2>
  <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
    At FusionDev Solutions, we offer flexible pricing plans to help your business grow. 
    Our plans are designed to provide value and scalability, ensuring you have the right tools and support 
    to succeed in the digital landscape.
  </p>
</div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 items-start">
          {pricingData.map((p, i) => (
            <PricingCard
              key={i}
              featureList={p.featureList}
              isMonth={p.isMonth}
              price={p.price}
              smallDescription={p.smallDescription}
              title={p.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type PricingCardProps = {
  title: string;
  smallDescription: string;
  price: string;
  isMonth: boolean;
  featureList: {
    title: string;
  }[];
};
const PricingCard = ({
  featureList,
  isMonth,
  price,
  smallDescription,
  title,
}: PricingCardProps) => {
  return (
    <CardContainer className="">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className=" mb-4 text-2xl font-semibold  text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem 
          translateZ="30"
          className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          {smallDescription}
        </CardItem>
        <CardItem 
          translateZ="80"
        
        className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">{price}</span>
          <span className="text-gray-500 dark:text-gray-400">
            /{isMonth ? "month" : "year"}
          </span>
        </CardItem>

        <CardItem
          translateZ="100"
          >
          <ul role="list" className="mb-8 space-y-4 text-left">
            {featureList.map((l, i) => (
              <li key={i} className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>{l.title}</span>
              </li>
            ))}
          </ul>
        </CardItem>
        <CardItem>
          <a
            href="#"
            className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          >
            Get started
          </a>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
