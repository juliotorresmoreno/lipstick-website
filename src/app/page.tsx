import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Pricing } from "@/components/Pricing";
import { Insides } from "@/components/Insides";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <>
      <main className="">
        <NavBar />
        <Hero />
        <About />
        <Features />
        <Insides />
        <Pricing />
      </main>

      <Footer />
    </>
  );
}
