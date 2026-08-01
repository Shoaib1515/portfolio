import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import AI from "@/components/AI/AI";
import Cybersecurity from "@/components/Cybersecurity/Cybersecurity";
import Projects from "@/components/Projects/Projects";
import Certifications from "@/components/Certifications/Certifications";
import Blog from "@/components/Blog/Blog";
import Resume from "@/components/Resume/Resume";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <AI />
      <Cybersecurity />
      <Projects />
      <Certifications />
      <Blog />
      <Resume />
      <Contact />
    </main>
  );
}
