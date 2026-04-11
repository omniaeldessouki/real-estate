import { createContext, useContext } from "react";

const PropertiesContext = createContext();

export function PropertiesProvider({ children }) {
  const properties = [
    {
      id: 1,
      type: "villa",
      title: "Modern Luxury Villa",
      price: "$450,000",
      location: "Dubai",
      status: "Available",

      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
      ],

      beds: 5,
      baths: 6,
      area: "320 m²",

      description:
        "Luxury modern villa with large living spaces, private pool, and modern architecture.",
    },

    {
      id: 2,
      type: "villa",
      title: "Beachfront Mansion",
      price: "$8,450,000",
      location: "Malibu, USA",
      status: "Available",

      images: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      ],

      beds: 6,
      baths: 6,
      area: "6200 sqft",

      description:
        "Beautiful beachfront property with ocean views and luxury interior design.",
    },

    {
      id: 3,
      type: "apartment",
      title: "City Luxury Apartment",
      price: "$1,200,000",
      location: "New York, USA",
      status: "Available",

      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      ],

      beds: 3,
      baths: 2,
      area: "2100 sqft",

      description:
        "Modern apartment located in the heart of the city with skyline views.",
    },

    {
      id: 4,
      type: "chalet",
      title: "Mountain Retreat",
      price: "$3,950,000",
      location: "Aspen, USA",
      status: "New Listing",

      images: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      ],

      beds: 4,
      baths: 5,
      area: "7800 sqft",

      description:
        "Luxury mountain home with panoramic views and modern architecture.",
    },

    {
      id: 5,
      type: "chalet",
      title: "Lake House",
      price: "$2,800,000",
      location: "Michigan, USA",
      status: "Available",

      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
      ],

      beds: 4,
      baths: 3,
      area: "3500 sqft",

      description: "Beautiful lakefront home perfect for relaxing weekends.",
    },

    {
      id: 6,
      type: "apartment",
      title: "Modern Glass House",
      price: "$6,900,000",
      location: "Los Angeles, USA",
      status: "Exclusive",

      images: [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      ],

      beds: 5,
      baths: 5,
      area: "5200 sqft",

      description:
        "Luxury glass house with floor-to-ceiling windows and modern design.",
    },

    {
      id: 7,
      type: "apartment",
      title: "Penthouse Suite",
      price: "$4,500,000",
      location: "Chicago, USA",
      status: "Available",

      images: [
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
      ],

      beds: 3,
      baths: 3,
      area: "2800 sqft",

      description: "Luxury penthouse with skyline views and premium finishes.",
    },

    {
      id: 8,
      type: "chalet",
      title: "Modern Family Home",
      price: "$980,000",
      location: "Toronto, Canada",
      status: "Available",

      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
      ],

      beds: 4,
      baths: 3,
      area: "2600 sqft",

      description: "Perfect family home with garden and modern interior.",
    },

    {
      id: 9,
      type: "villa",
      title: "Luxury Pool Villa",
      price: "$2,200,000",
      location: "Bali, Indonesia",
      status: "Available",

      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
      ],

      beds: 6,
      baths: 6,
      area: "300 m²",

      description:
        "Private tropical villa with infinity pool and luxury amenities.",
    },

    {
      id: 10,
      type: "chalet",
      title: "Desert Luxury House",
      price: "$3,200,000",
      location: "Arizona, USA",
      status: "New Listing",

      images: [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      ],

      beds: 5,
      baths: 5,
      area: "4100 sqft",

      description: "Modern desert house with luxury finishes and scenic views.",
    },

    {
      id: 11,
      type: "apartment",
      title: "Luxury Smart Home",
      price: "$5,600,000",
      location: "California, USA",
      status: "Exclusive",

      images: [
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
      ],

      beds: 5,
      baths: 3,
      area: "6000 sqft",

      description:
        "High-tech smart home with luxury design, automation systems, and private pool.",
    },
  ];

  return (
    <PropertiesContext.Provider value={{ properties }}>
      {children}
    </PropertiesContext.Provider>
  );
}

export function useProperties() {
  const context = useContext(PropertiesContext);

  if (!context) {
    throw new Error("useProperties must be used inside PropertiesProvider");
  }

  return context;
}
