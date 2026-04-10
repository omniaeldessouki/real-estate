import Contact from "../Home/Contact";
import Units from "../Home/UnitsList";
import Hero from "./Hero";
import IdealClients from "./IdealClients";
import PortfolioGallery from "./PortfolioGallery";
import ServiceGallery from "./ServiceGallery";
import RealEstateSlider from "./Slider";
import Values from "./Values";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";

export default function Services() {
  return (
    <>
      <Hero />
      <OurServices />
      <ServiceGallery />
      <IdealClients />
      <RealEstateSlider />
      <WhyChooseUs />
      <Values />
      <PortfolioGallery />
      <Units />
      <Contact />
    </>
  );
}
