import { Activities } from "../sections/Activities";
import { Certificates } from "../sections/Certificates";
import { Contact } from "../sections/Contact";
import { Education } from "../sections/Education";
import { Experience } from "../sections/Experience";
import { Footer } from "../sections/Footer";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";
import { Navbar } from "./Navbar";

export function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Activities />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
