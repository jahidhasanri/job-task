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
  name: "Gucci Duffle Bag",
  price: 1250,
  image: "/bag.png",

  description:
    "Premium Gucci duffle bag made with high-quality materials, perfect for travel and luxury lifestyle.",
  shortDescription: "Luxury travel bag with premium finish",

  rating: 4.8,
  reviews: 210,

  stock: 12,
  size: ["Medium", "Large"],

  status: "Hot",

  keySpecifications: [
    "Premium Leather & Canvas Material",
    "Spacious Main Compartment",
    "Adjustable Shoulder Strap",
    "Metal Zipper Closure",
    "Luxury Gucci Branding",
  ],
},

  {
  id: 2,
  name: "RGB Liquid CPU Cooler",
  price: 180,
  image: "/cpu.png",

  description:
    "High-performance RGB liquid CPU cooler designed for efficient heat dissipation and silent operation.",
  shortDescription: "Advanced liquid cooling with RGB lighting",

  rating: 4.6,
  reviews: 145,

  stock: 25,
  size: ["240mm Radiator", "360mm Radiator"],

  status: "New",

  keySpecifications: [
    "RGB Lighting Effects",
    "High-Efficiency Liquid Cooling",
    "Silent Dual Fan Design",
    "Wide CPU Socket Compatibility",
    "Durable Aluminum Radiator",
  ],
}
,
  {
  id: 3,
  name: "RGB Liquid CPU Cooler",
  price: 180,
  image: "/cpu.png",

  description:
    "High-performance RGB liquid CPU cooler designed for efficient heat dissipation and silent operation.",
  shortDescription: "Advanced liquid cooling with RGB lighting",

  rating: 4.6,
  reviews: 145,

  stock: 25,
  size: ["240mm Radiator", "360mm Radiator"],

  status: "New",

  keySpecifications: [
    "RGB Lighting Effects",
    "High-Efficiency Liquid Cooling",
    "Silent Dual Fan Design",
    "Wide CPU Socket Compatibility",
    "Durable Aluminum Radiator",
  ],
}
,
  {
  id: 4,
  name: "RGB Liquid CPU Cooler",
  price: 180,
  image: "/cpu.png",

  description:
    "High-performance RGB liquid CPU cooler designed for efficient heat dissipation and silent operation.",
  shortDescription: "Advanced liquid cooling with RGB lighting",

  rating: 4.6,
  reviews: 145,

  stock: 25,
  size: ["240mm Radiator", "360mm Radiator"],

  status: "New",

  keySpecifications: [
    "RGB Lighting Effects",
    "High-Efficiency Liquid Cooling",
    "Silent Dual Fan Design",
    "Wide CPU Socket Compatibility",
    "Durable Aluminum Radiator",
  ],
}
,
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