import Head from "next/head";
import Main from "@/components/Layout/main";
import About from "../components/Pages/About/About";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Luxury Real Estate Company</title>

        <meta
          name="description"
          content="Learn more about our real estate company, our mission, and how we help clients find luxury villas, apartments, and premium properties."
        />

        <meta
          name="keywords"
          content="about real estate company, luxury real estate, property experts, real estate team"
        />

        <meta name="author" content="Real Estate Company" />

        {/* Open Graph */}
        <meta property="og:title" content="About Our Real Estate Company" />
        <meta
          property="og:description"
          content="Discover our story, mission, and the team behind our luxury real estate services."
        />
        <meta property="og:type" content="website" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <About />
      </Main>
    </>
  );
}