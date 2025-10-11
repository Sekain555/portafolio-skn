import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div id="sobre-mi" className="min-h-screen py-32"></div>
        <div id="habilidades" className="min-h-screen py-32"></div>
        <div id="proyectos" className="min-h-screen py-32"></div>
        <div id="servicios" className="min-h-screen py-32"></div>
        <div id="contacto" className="min-h-screen py-32"></div>
      </main>
    </div>
  );
}
