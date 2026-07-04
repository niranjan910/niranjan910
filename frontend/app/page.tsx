import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { Companies } from "@/components/sections/Companies";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Companies />
        <Gallery />
        <About />
        <Projects />
        <Process />
        <Experience />
        <Services />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
