import Main from "@/components/Layout/main";
import Home from "@/components/Pages/Home/Home";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
    <Head>
        <title>Luxury Real Estate | Find Villas, Apartments & Chalets</title>

        <meta
          name="description"
          content="Explore luxury villas, modern apartments, and premium chalets around the world. Discover the best real estate properties with stunning designs and locations."
        />

        <meta
          name="keywords"
          content="real estate, luxury villas, apartments, chalets, property for sale, luxury homes"
        />

        <meta name="author" content="Real Estate Company" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Luxury Real Estate Properties" />
        <meta
          property="og:description"
          content="Discover premium villas, apartments and chalets in the best locations."
        />
        <meta property="og:type" content="website" />

        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Main>
      <Home />
    </Main>
    </>
  );
}
