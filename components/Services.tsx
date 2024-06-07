"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import GridItem from "./GridItem";
import { Heading, P } from "./ui/Typography";
import Image from "next/image";

const content = [
  {
    icon: "/icons/service-icon1.svg",
    title: "Custom Web Application Development",
    description: (
      <>
        <P>
          Boost efficiency with custom web applications tailored to your needs. Our scalable solutions streamline operations and adapt to changing business demands.
        </P>
      </>
    ),
  },
  {
    icon: "/icons/service-icon5.svg",
    title: "Front-end Design & Development",
    description: (
      <>
        <P>
          Create captivating interfaces with our front-end expertise in HTML, CSS, and JavaScript. Enjoy optimized performance and seamless cross-browser compatibility.
        </P>
      </>
    ),
  },
  {
    icon: "/icons/service-icon2.svg",
    title: "eCommerce Development",
    description: (
      <>
        <P>
          Drive revenue with secure, scalable eCommerce platforms. Our solutions include intuitive product catalogs and seamless checkout experiences.
        </P>
      </>
    ),
  },
  {
    icon: "/icons/service-icon4.svg",
    title: "Website Design & Development",
    description: (
      <>
        <P>
          Design visually stunning websites that enhance your brand. Our responsive layouts and compelling visuals create seamless browsing experiences.
        </P>
      </>
    ),
  },
  {
    icon: "/icons/service-icon7.svg",
    title: "CMS Development",
    description: (
      <>
        <P>
          Manage your content effortlessly with our customized CMS solutions. Enjoy user-friendly interfaces and scalable workflows for easy publishing.
        </P>
      </>
    ),
  },
  {
    icon: "/icons/service-icon8.svg",
    title: "Support & Maintenance",
    description: (
      <>
        <P>
          Receive regular updates, bug fixes, and security patches. Our team provides ongoing support to keep your website up-to-date and secure.
        </P>
      </>
    ),
  },
];


export function Services() {
  return (
    <SectionContainer id="services">
      <div className=" rounded-xl  w-full ">
        <GridItem className="w-full mb-6">
          <Heading>OUR SERVICES.</Heading>
        </GridItem>
        <div className="grid  grid-rows-2  lg:grid-cols-2 grid-cols-1 gap-6">
          {content.map((c, i) => (
            <GridItem key={i} className="">
              
              <div className="flex justify-start mb-2 items-center gap-2">
                <Image
                  className=""
                  src={c.icon}
                  alt={c.title + "icon"}
                  height={50}
                  width={50}
                />
                <Heading type="h3">{c.title}</Heading>
              </div>
              <P>{c.description}</P>
            </GridItem>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl overflow-hidden group/canvas-card flex items-center justify-center mx-auto p-4  h-full w-full relative"
    >
     
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
