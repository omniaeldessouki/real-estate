"use client";

import { createContext, useContext } from "react";

const SlidesContext = createContext();

export function SlidesProvider({ children }) {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85",
      title: "Great room · Dining & kitchen",
      desc: "From the table through the cook space to a glass-zoned lounge",
    },
    {
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85",
      title: "Contemporary estate · Pool and sunset light",
      desc: "Clean lines, glass, and indoor–outdoor flow",
    },
    {
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85",
      title: "Coastal glass · Pool & terrace",
      desc: "Indoor-outdoor living on the water",
    },
    {
      title: "Chef kitchen core",
      desc: "Service flow, storage, and entertaining capacity",
      img: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=2000&q=88",
    },
    {
      img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85",
      title: "Spa-inspired bath",
      desc: "Freestanding tub, natural light, and a serene palette",
    },
    {
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85",
      title: "Living gallery · Curated walls",
      desc: "Seating, art, and daylight balanced for hosting",
    },
    {
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=2400&q=85",
      title: "City residence · Calm volume",
      desc: "Editorial calm in prime locations",
    },
  ];
  return (
    <SlidesContext.Provider value={{ slides }}>
      {children}
    </SlidesContext.Provider>
  );
}

export function useSlides() {
  const context = useContext(SlidesContext);

  if (!context) {
    throw new Error("useSlides must be used within SlidesProvider");
  }

  return context;
}
