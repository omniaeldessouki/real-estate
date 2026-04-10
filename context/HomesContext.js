"use client";

import { createContext, useContext } from "react";

const HomesContext = createContext();

export function HomesProvider({ children }) {
  const homes = [
    {
      id: 1,
      tag: "AVAILABLE",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
      price: "$3,950,000",
      desc: "Refined high-rise residence with lake outlooks, a serviceable floor plan and full-building amenities.",
      specs: "3 BEDS   3 BATHS   2,650 SQFT",
    },
    {
      id: 2,
      tag: "NEW LISTING",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      price: "$2,780,000",
      desc: "Modern architectural residence surrounded by mature trees.",
      specs: "4 BEDS   4 BATHS   3,200 SQFT",
    },
    {
      id: 3,
      tag: "AVAILABLE",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
      price: "$1,950,000",
      desc: "Minimalist interior with natural light and warm materials.",
      specs: "3 BEDS   2 BATHS   2,100 SQFT",
    },
    {
      id: 4,
      tag: "PRIVATE SALE",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      price: "$3,200,000",
      desc: "Open plan living with handcrafted finishes.",
      specs: "5 BEDS   4 BATHS   3,850 SQFT",
    },
    {
      id: 5,
      tag: "NEW LISTING",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
      price: "$4,400,000",
      desc: "Architectural residence with striking geometry.",
      specs: "4 BEDS   3 BATHS   3,100 SQFT",
    },
    {
      id: 6,
      tag: "AVAILABLE",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
      price: "$1,350,000",
      desc: "Bright Scandinavian interior and warm textures.",
      specs: "2 BEDS   2 BATHS   1,600 SQFT",
    },
  ];

  return (
    <HomesContext.Provider value={{ homes }}>{children}</HomesContext.Provider>
  );
}

export function useHomes() {
  return useContext(HomesContext);
}
