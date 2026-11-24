import { AppController } from "@/components/providers/AppController";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Nav } from "@/components/sections/Nav";
import { Products } from "@/components/sections/Products";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { SceneMount } from "@/components/webgl/SceneMount";
import { CursorGlow, ScrollProgress } from "@/components/ui/Chrome";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { Preloader } from "@/components/ui/Preloader";

export default function Home() {
  return (
    <>
      <AppController />
      <Preloader />

      {/* Fixed layers, back to front: CSS backdrop, WebGL particles, cursor light, film grain. */}
      <div aria-hidden className="backdrop" />
      <SceneMount />
      <CursorGlow />
      <div aria-hidden className="grain" />

      <ScrollProgress />
      <Nav />
      <CommandPalette />

      <main id="main" className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
