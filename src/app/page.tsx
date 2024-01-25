import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Pricing } from "@/components/Pricing";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="">
        <Hero />
        <About />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </>
  );
}
