import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Exhibitions from "@/components/Exhibitions";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navigation />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Exhibitions />
        <Instagram />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
