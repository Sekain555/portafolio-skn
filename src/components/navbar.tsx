"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      let currentSection = "";
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(s => s);

      for (const section of sections) {
        if (section) {
           const rect = section.getBoundingClientRect();
           if (rect.top <= 100 && rect.bottom >= 100) {
             currentSection = `#${section.id}`;
             break;
           }
        }
      }
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#inicio" className="flex items-center gap-2 font-bold text-lg">
          <FaCode className="h-6 w-6 text-primary" />
          <span>Sekain</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.href ? "page" : undefined}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:flex rounded-full">
            <a href="/cv.pdf" download>Descargar CV</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col items-center gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.href ? "page" : undefined}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                   activeSection === link.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full rounded-full mt-4">
              <a href="/cv.pdf" download>Descargar CV</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
