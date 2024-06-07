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
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <h2 className="font-bold mb-4">Home</h2>
      <ul>
        <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold mb-4">Services</h2>
      <ul>
        <li><Link href="#" className="text-gray-400 hover:text-white">Web Development</Link></li>
        <li><Link href="#" className="text-gray-400 hover:text-white">App Development</Link></li>
        <li><Link href="#" className="text-gray-400 hover:text-white">SEO Services</Link></li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold mb-4">Projects</h2>
      <ul>
        <li><Link href="#" className="text-gray-400 hover:text-white">Recent Works</Link></li>
        <li><Link href="#" className="text-gray-400 hover:text-white">Case Studies</Link></li>
        <li><Link href="#" className="text-gray-400 hover:text-white">Client Testimonials</Link></li>
      </ul>
    </div>
  </div>
          </GridItem>
          <GridItem className="flex justify-between items-center">
            <small>©️ 2024 DX. All rights reserved.</small>
            <div>
              <a href="">Terms & Conditions</a>  |  <a href="">Privacy Policy</a>
            </div>
          </GridItem>
        </div>
      </div>
    </SectionContainer>
  );
}
