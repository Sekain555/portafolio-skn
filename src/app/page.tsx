import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <div id="servicios" className="min-h-screen py-32"></div>
        <div id="contacto" className="min-h-screen py-32"></div>
      </main>
    </div>
  );
}
