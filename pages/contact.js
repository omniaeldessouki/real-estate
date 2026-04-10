import Head from "next/head";
import Main from "@/components/Layout/main";
import ContactForm from "../components/Pages/Contact/ContactForm";
import Hero from "../components/Pages/Contact/Hero";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Luxury Real Estate</title>

        <meta
          name="description"
          content="Get in touch with our real estate experts. Contact us for buying, selling, or investing in luxury villas, apartments, and premium properties."
        />

        <meta
          name="keywords"
          content="contact real estate, property consultation, real estate support, luxury property contact"
        />

        <meta name="author" content="Real Estate Company" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Our Real Estate Team" />
        <meta
          property="og:description"
          content="Reach out to our team for professional real estate advice and property inquiries."
        />
        <meta property="og:type" content="website" />

        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Hero />
        <ContactForm />
      </Main>
    </>
  );
}
