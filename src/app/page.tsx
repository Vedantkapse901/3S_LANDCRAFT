import Navigation from "@/components/Navigation";
import CinematicFilm from "@/components/CinematicFilm";
import ManifestoSection from "@/components/ManifestoSection";
import ProjectSection from "@/components/ProjectSection";
import LocationSection from "@/components/LocationSection";
import VillaShowcase from "@/components/VillaShowcase";
import AmenitiesSection from "@/components/AmenitiesSection";
import MasterplanSection from "@/components/MasterplanSection";
import GallerySection from "@/components/GallerySection";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <CinematicFilm />
        <ManifestoSection />
        <ProjectSection />
        <LocationSection />
        <VillaShowcase />
        <AmenitiesSection />
        <MasterplanSection />
        <GallerySection />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
