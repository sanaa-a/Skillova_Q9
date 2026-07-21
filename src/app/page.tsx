import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProjectGrid from "@/components/ProjectGrid";
import { StackStrip, Footer } from "@/components/StackAndFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <ProjectGrid />
        <StackStrip />
      </main>
      <Footer />
    </>
  );
}
