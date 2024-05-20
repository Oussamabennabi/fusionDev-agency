import { ContactUs } from "@/components/ContactUs/ContactUs";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar/Navbar";
import { Pricing } from "@/components/Pricing/Pricing";
import { Projects } from "@/components/Projects/Projects";
import { Services } from "@/components/Services/Services";
import { WhyOurSolution } from "@/components/WhyOurSolution/WhyOurSolution";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero/>
      <Services/>
      <Projects/>
      <WhyOurSolution/>
      <Pricing/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}
