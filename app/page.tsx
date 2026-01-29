import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Resources } from "@/components/sections/Resources";
import { LatestInsights } from "@/components/sections/LatestInsights";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Resources />
      <LatestInsights />
      <Contact />
      <Footer />
    </main>
  );
}
