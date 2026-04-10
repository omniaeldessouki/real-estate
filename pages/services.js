import Head from "next/head";
import Main from "@/components/Layout/main";
import Services from "../components/Pages/Services/Services";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Real Estate Services | Luxury Property Solutions</title>

        <meta
          name="description"
          content="Discover our premium real estate services including property buying, selling, investment consulting, and luxury property management."
        />

        <meta
          name="keywords"
          content="real estate services, property management, buy property, sell property, real estate consulting"
        />

        <meta name="author" content="Real Estate Company" />

        {/* Open Graph */}
        <meta property="og:title" content="Professional Real Estate Services" />
        <meta
          property="og:description"
          content="Explore our real estate services including property sales, investment consulting, and management."
        />
        <meta property="og:type" content="website" />

        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Services />
      </Main>
    </>
  );
}