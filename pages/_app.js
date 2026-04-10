import "@/styles/globals.css";

import { HomesProvider } from "@/context/HomesContext";
import { PropertiesProvider } from "@/context/PropertiesContext";
import { SlidesProvider } from "@/context/ImagesContext";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

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
