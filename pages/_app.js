import "@/styles/globals.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

import { HomesProvider } from "@/context/HomesContext";
import { PropertiesProvider } from "@/context/PropertiesContext";
import { SlidesProvider } from "@/context/ImagesContext";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      });
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <HomesProvider>
      <SlidesProvider>
        <PropertiesProvider>
          {getLayout(<Component {...pageProps} />)}
        </PropertiesProvider>
      </SlidesProvider>
    </HomesProvider>
  );
}
