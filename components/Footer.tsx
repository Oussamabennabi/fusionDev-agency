"use client";

import {  Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import GridItem from "./GridItem";
import SectionContainer from "./SectionContainer";
import Link from "next/link";

const socials = [
  {
    icon: <Instagram />,

    link: "",
  },
  {
    icon: <Facebook />,

    link: "",
  },
  {
    icon: <Linkedin />,

    link: "",
  },
 
  {
    icon: <Twitter />,
    link: "",
  },
 
];
export function Footer() {
  return (
    <SectionContainer>
      <div className=" grid grid-cols-5 gap-6">
        <div className="grid md:grid-cols-2 grid-cols-4 md:grid-rows-2 grid-rows-1 gap-6 col-span-5 md:col-span-1">
          {socials.map((s, i) => (
            <GridItem className="p-0 flex justify-center items-center" key={i}>
              <Link href={s.link} className="hover:text-primary transition-all px-10 md:py-5 py-10 ">
              <span className=" ">{s.icon}</span>
              </Link>
            </GridItem>
          ))}
        </div>
        <div className="md:col-span-4 space-y-6 col-span-5">
          <GridItem>
            4 columns of footer link (Home, Services, Projects, Blogs)
          </GridItem>
          <GridItem className="flex justify-between items-center">
            <small>©️ 2024 Oussama. All rights reserved.</small>
            <div>
              <a href="">Terms & Conditions</a>  |  <a href="">Privacy Policy</a>
            </div>
          </GridItem>
        </div>
      </div>
    </SectionContainer>
  );
}
