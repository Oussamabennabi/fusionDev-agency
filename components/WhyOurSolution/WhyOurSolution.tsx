"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";

export function WhyOurSolution() {
  return (
    <div id="why-us" >
    <h1 className="text-3xl pb-12 font-bold px-16" >Why FusionDev Solution?</h1>

    <TracingBeam className="px-6">
      <div className="max-w-6xl  mx-auto antialiased  pt-4 relative">
        {content.map((item, index) => (
          <div
            key={`content-${index}`}
            className="mb-10 flex-col md:flex-row gap-16 flex justify-center items-center h-screen"
          >
            <div className="self-start mt-28">
              <h2 className=" text-2xl font-bold  py-1 mb-4">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>

            {item?.image && (
              <Image
                src={item.image}
                alt="blog thumbnail"
                width={500}
                height={500}
                className="rounded-lg md:!w-[700px] !w-[400px] !h-[400px] mb-10 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>
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
    image: "/Tailored-solution.jpeg",
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
    image: "/expert-team.jpeg",
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
    image: "/cuttingedg-tech.jpeg",
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
    image: "/client-approch.jpeg",
  },
  {
    title: "Competitive Pricing",
    description: (
      <>
        <p>
          We offer transparent and competitive pricing, ensuring that our
          clients receive the best value for their investment.
        </p>
      </>
    ),
    image: "/pricing.jpeg",
  },
];
