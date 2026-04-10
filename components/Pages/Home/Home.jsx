import Hero from "./Hero";
import RefineSearch from "./RefineSearch";
import SignatureHomes from "./SignatureHomes";
import FeaturedProperties from "./FeaturedProperties";
import UnitsList from "./UnitsList";
import PropertyShowcase from "./PropertyShowcase";
import Markets from "./Markets";
import Process from "./Process";
import UnitDueDiligence from "./UnitDueDiligence";
import Expertise from "./Expertise";
import LivingGallery from "./LivingGallery";
import Testimonials from "./Testimonials";
import AdvisoryApproach from "./AdvisoryApproach";
import LifestyleAmenities from "./LifestyleAmenities";
import VisualGallery from "./VisualGallery";
import Faq from "./Faq";
import Contact from "./Contact";

export default function Home() {

  return (
    <div>
      <Hero />
      <RefineSearch />
      <SignatureHomes />
      <PropertyShowcase />
      <section id="featured" className="scroll-mt-24 py-16">
        <FeaturedProperties />
      </section>
      {/* <UnitsList /> */}
      <Markets />
      <Process />
      <LivingGallery />
      <Expertise />
      <Testimonials/>
      <AdvisoryApproach/>
      <LifestyleAmenities/>
      <VisualGallery/>
      <UnitDueDiligence />
      <Faq/>
      <Contact/>
    </div>
  );
}
