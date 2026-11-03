import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Experience />
        <Certifications />
      </main>
      <ContactFooter />
    </div>
  );
}
