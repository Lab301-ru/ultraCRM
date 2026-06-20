import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { Problems } from "@/components/Problems";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { Workflow } from "@/components/Workflow";
import { Analytics } from "@/components/Analytics";
import { Benefits } from "@/components/Benefits";
import { Audience } from "@/components/Audience";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Problems />
        <Solution />
        <Features />
        <Workflow />
        <Analytics />
        <Benefits />
        <Audience />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
