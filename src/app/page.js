import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Certifications from "@/components/Certifications/Certifications";
import Resume from "@/components/Resume/Resume";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Resume />
      <Contact />
    </main>
  );
}
