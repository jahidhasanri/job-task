export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Apple MacBook Air Early(2025)",
    price: 849,
    image: "/macbook-air.png",
    description: "Apple MacBook Air (Early 2025) M3 13.6' Midnight Laptop...",
    rating: 4.5,
    reviews: 150,
  },
  {
    id: 2,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    image: "/asus-laptop.png",
    description: "Powerful gaming laptop with Intel i7...",
    rating: 4.2,
    reviews: 65,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 110,
    image: "/monitor.png",
    description: "High-quality IPS LCD monitor for gamers...",
    rating: 4.1,
    reviews: 65,
  },
  {
    id: 4,
    name: "HAVIT HV-Q92 Gamepad",
    price: 50,
    image: "/gamepad.png",
    description: "Comfortable wireless gamepad...",
    rating: 4.3,
    reviews: 65,
  },
  {
    id: 5,
    name: "AK-900 Wired Keyboard",
    price: 200,
    image: "/keyboard.png",
    description: "RGB wired mechanical keyboard...",
    rating: 4.4,
    reviews: 65,
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 70,
    image: "/mouse.png",
    description: "High precision gaming mouse...",
    rating: 4.5,
    reviews: 45,
  },
  {
    id: 7,
    name: "Smartphone X",
    price: 500,
    image: "/phone.png",
    description: "Latest smartphone with AMOLED display...",
    rating: 4.2,
    reviews: 80,
  },
  {
    id: 8,
    name: "Wireless Earbuds",
    price: 120,
    image: "/earbuds.png",
    description: "Noise-cancelling wireless earbuds...",
    rating: 4.6,
    reviews: 90,
  },
];
