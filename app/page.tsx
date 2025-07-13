import Contact from "@/component/main/Contact";
import Encryption from "@/component/main/Encrpytion";
import Hero from "@/component/main/Hero";
import Projects from "@/component/main/Project";
import Skills from "@/component/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}