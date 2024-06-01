import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Projects } from "@/components/Projects";
import Questions from "@/components/Questions";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhyOurSolution } from "@/components/WhyOurSolution";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero/>
      <WhyOurSolution/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Questions/>
      <GetInTouch/>
      <ContactUs/>

      <Footer/>
    </main>
  );
}
