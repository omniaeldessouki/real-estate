import AboutStory from "./AboutStory";
import Hero from "./Hero";
import WhereWeAdvise from "./WhereWeAdvise";
import MissionSection from "./MissionSection";
import ClientOutcomes from "./ClientOutcomes";
import VisualGallery from "../Home/VisualGallery";
import Faq from "../Home/Faq";
import Contact from "../Home/Contact";

export default function About () {
    return(
        <>
        <Hero/>
        <WhereWeAdvise/>
        <MissionSection/>
        <ClientOutcomes/>
        <VisualGallery/>
        <AboutStory/>
        <Faq/>
        <Contact/>
        </>
    )
}