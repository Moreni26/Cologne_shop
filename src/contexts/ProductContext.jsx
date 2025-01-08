import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    
    const [products] = useState([
      {
        id: 1,
        name: "CHANCE CHANNEL",
        category: "Perfume",
        price: 250,
        image: "/assets/images/CHANEL.jpg",
        description: "A luxurious and captivating scent for the modern woman.",
      },
      {
        id: 2,
        name: "CLUB DE NUIT",
        category: "Perfume",
        price: 450,
        image: "/assets/images/club de nuit.jpg",
        description: "A bold and sophisticated fragrance for every occasion.",
      },
      {
        id: 3,
        name: "CREED AVENTUS",
        category: "Perfume",
        price: 500,
        image: "/assets/images/CreedAventus.jpg",
        description: "A timeless scent with notes of pineapple and birch.",
      },
      {
        id: 4,
        name: "MISS DIOR",
        category: "Perfume",
        price: 270,
        image: "/assets/images/MissDior.jpg",
        description: "A floral fragrance that embodies elegance and charm.",
      },
      {
        id: 5,
        name: "DOLCE & GABBANA",
        category: "Perfume",
        price: 300,
        image: "/assets/images/DolceGabbana.jpg",
        description:
          "A refreshing and vibrant fragrance with Mediterranean vibes.",
      },
      {
        id: 6,
        name: "OMBRE NOMADE",
        category: "Perfume",
        price: 400,
        image: "/assets/images/louis.jpeg",
        description: "An exotic scent with rich oud and smoky notes.",
      },
      {
        id: 7,
        name: "FREDERIC MALLE",
        category: "Perfume",
        price: 350,
        image: "/assets/images/FredericMalle.jpg",
        description: "A masterpiece of modern perfumery with complex layers.",
      },
      {
        id: 8,
        name: "GUCCI BLOOM",
        category: "Perfume",
        price: 200,
        image: "/assets/images/GucciBloom.jpg",
        description:
          "A lush, garden-inspired fragrance with white floral notes.",
      },
      {
        id: 9,
        name: "SAUVAGE DIOR",
        category: "Perfume",
        price: 400,
        image: "/assets/images/Sauvage.jpg",
        description: "A raw and noble scent for the adventurous spirit.",
      },
      {
        id: 10,
        name: "YVES SAINT",
        category: "Perfume",
        price: 300,
        image: "/assets/images/Ysl.jpg",
        description: "A classic fragrance with bold and alluring notes.",
      },
      {
        id: 11,
        name: "TOMFORD OUD",
        category: "Perfume",
        price: 500,
        image: "/assets/images/TomFord.jpg",
        description: "A luxurious oud scent with deep, woody undertones.",
      },
      {
        id: 12,
        name: "WILD STONE",
        category: "Perfume",
        price: 350,
        image: "/assets/images/WildStone.jpg",
        description: "An energetic fragrance with citrus and spicy notes.",
      },
    ]);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
