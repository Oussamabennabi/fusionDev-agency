import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import Questions from "@/components/Questions";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhyOurSolution } from "@/components/WhyOurSolution";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero description="" title="DIGITAL SOLUTIONS THAT DRIVES SUCCESS."/>
      <WhyOurSolution/>
      <Services/>
      <Projects projects={[]} title="OUR WORK."/>
      <Testimonials/>
      <Questions/>
      <GetInTouch/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}
