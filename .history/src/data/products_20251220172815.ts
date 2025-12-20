export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;         
  shortDescription?: string;    
  rating?: number;
  reviews?: number;
  stock?: number; 
  size?: string[]; 
  discountPercentage?: number;
  status?:string;
  keySpecifications?: string[];
}


export const products: Product[] = [
  {
    id: 1,
    name: "Apple MacBook Air Early (2025)",
    price: 849,
    image: "/bag.png",

    description:
      "Apple MacBook Air (Early 2025) M3 13.6-inch Midnight Laptop with powerful performance.",
    shortDescription: "M3 chip, 13.6-inch Retina Display",

    rating: 4.5,
    reviews: 150,

    stock: 25,
    size: ["13.6-inch"],

    discountPercentage: 35,

    keySpecifications: [
      "Apple M3 Chip",
      "8-Core CPU",
      "8GB Unified Memory",
      "256GB SSD",
      "macOS Sonoma",
      "Up to 18 hours battery life",
    ],
  },

  {
    id: 2,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    image: "/cpu.png",

    description: "Powerful gaming laptop with Intel i7 processor.",
    shortDescription: "Intel i7, RTX Graphics",
    rating: 4.2,
    reviews: 65,

    stock: 12,
    size: ["15.6-inch"],

    keySpecifications: [
      "Intel Core i7",
      "16GB RAM",
      "RTX 3050",
      "512GB SSD",
      "144Hz Display",
    ],
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 110,
    image: "/gamepad.png",
    description: "High-quality IPS LCD monitor for gamers...",
    rating: 4.1,
    reviews: 65,
  },
  {
    id: 4,
    name: "HAVIT HV-Q92 Gamepad",
    price: 50,
    image: "/jaket.png",
    description: "Comfortable wireless gamepad...",
    rating: 4.3,
    reviews: 65,
  },
  {
    id: 5,
    name: "AK-900 Wired Keyboard",
    price: 200,
    image: "/bag.png",
    description: "RGB wired mechanical keyboard...",
    rating: 4.4,
    reviews: 65,
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 70,
    image: "/cpu.png",
    description: "High precision gaming mouse...",
    rating: 4.5,
    reviews: 45,
  },
  {
    id: 7,
    name: "Smartphone X",
    price: 500,
    image: "/gamepad.png",
    description: "Latest smartphone with AMOLED display...",
    rating: 4.2,
    reviews: 80,
  },
  {
    id: 8,
    name: "Wireless Earbuds",
    price: 120,
    image: "/jaket.png",
    description: "Noise-cancelling wireless earbuds...",
    rating: 4.6,
    reviews: 90,
  },
];

export const productsAll: Product[] = [
  {
  id: 1,
  name: "ASUS FHD Gaming Laptop",
  price: 960,
  image: "/laptop.png",

  description: "Powerful gaming laptop for high performance gaming and multitasking.",
  shortDescription: "Intel i7 processor with RTX graphics",

  rating: 5,
  reviews: 65,

  stock: 18,
  size: ["15.6-inch"],

  discountPercentage: 35,
  status: "Hot",

  keySpecifications: [
    "Intel Core i7 Processor",
    "16GB DDR4 RAM",
    "NVIDIA RTX Graphics",
    "512GB SSD Storage",
    "15.6-inch Full HD Display",
    "144Hz Refresh Rate"
  ]
},

  {
  id: 2,
  name: "IPS LCD Gaming Monitor",
  price: 1160,
  image: "/monitor.png",

  description: "High quality IPS LCD gaming monitor with vivid colors and smooth performance.",
  shortDescription: "IPS panel with ultra-smooth refresh rate",

  rating: 5,
  reviews: 65,

  stock: 30,
  size: ["24-inch", "27-inch"],

  status: "New",

  keySpecifications: [
    "IPS LCD Panel",
    "Full HD / QHD Resolution",
    "165Hz Refresh Rate",
    "1ms Response Time",
    "AMD FreeSync Support",
    "Ultra Thin Bezel Design"
  ]
}
,
  {
    id: 3,
    name: "HAVIT HV-G92 Gamepad",
    price: 560,
    image: "/gamepad1.png",

    description: "High quality gaming controller for PC & Console.",
    shortDescription: "Ergonomic wireless controller",

    rating: 5,
    reviews: 65,

    stock: 40,
    status: "New",

    keySpecifications: [
      "Wireless Connectivity",
      "Ergonomic Design",
      "Long Battery Life",
      "PC & Console Support",
    ],
  },
  {
    id: 4,
    name: "AK-900 Wired Keyboard",
    price: 200,
    image: "/keyboard.png",
    description: "Mechanical keyboard",
    rating: 5,
    reviews: 65,
  },
  {
    id: 5,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    image: "/laptop.png",
    description: "Powerful gaming laptop",
    rating: 5,
    reviews: 65,
    discountPercentage: 35,
  },
  {
    id: 6,
    name: "IPS LCD Gaming Monitor",
    price: 1160,
    image: "/monitor.png",
    description: "High quality monitor",
    rating: 5,
    reviews: 65,
  },
  {
    id: 7,
    name: "HAVIT HV-G92 Gamepad",
    price: 560,
    image: "/gamepad1.png",
    description: "Gaming controller",
    rating: 5,
    reviews: 65,
    status: "New",
  },
  {
    id: 8,
    name: "AK-900 Wired Keyboard",
    price: 200,
    image: "/keyboard.png",
    description: "Mechanical keyboard",
    rating: 5,
    reviews: 65,
  },
];