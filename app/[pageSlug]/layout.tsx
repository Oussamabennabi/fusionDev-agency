import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import { Navbar } from "@/components/Navbar";
import Questions from "@/components/Questions";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Questions />
      <GetInTouch />
      <ContactUs />

      <Footer />
    </>
  );
};

export default Layout;
