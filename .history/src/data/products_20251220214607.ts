export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;         
  shortDescription?: string;    
  rating: number;
  reviews: number;
  stock: number; 
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
  name: "GP11 Shooter USB Gamepad",
  price: 75,
  image: "/gamepad.png",

  description:
    "Ergonomic GP11 Shooter USB gamepad for PC gaming with precise controls and comfortable grip.",
  shortDescription: "USB wired controller for PC gaming",

  rating: 4.4,
  reviews: 98,

  
  size: ["Standard"],

  status: "Sale",

  keySpecifications: [
    "USB Plug & Play",
    "Ergonomic Grip Design",
    "Dual Vibration Feedback",
    "Compatible with Windows",
    "High-Precision Buttons",
  ],
}

,
  {
  id: 4,
  name: "Quilted Satin Jacket",
  price: 220,
  image: "/jaket.png",

  description:
    "Stylish quilted satin jacket designed for warmth and modern fashion appeal.",
  shortDescription: "Lightweight satin jacket with quilted design",

  rating: 4.7,
  reviews: 120,

  stock: 20,
  size: ["S", "M", "L", "XL"],

  status: "New",

  keySpecifications: [
    "Premium Satin Fabric",
    "Quilted Insulated Design",
    "Comfortable Inner Lining",
    "Durable Zipper Closure",
    "Modern Casual Fit",
  ],
}

,
  {
  id: 5,
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
  id: 6,
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
  id: 7,
  name: "GP11 Shooter USB Gamepad",
  price: 75,
  image: "/gamepad.png",

  description:
    "Ergonomic GP11 Shooter USB gamepad for PC gaming with precise controls and comfortable grip.",
  shortDescription: "USB wired controller for PC gaming",

  rating: 4.4,
  reviews: 98,

  stock: 40,
  size: ["Standard"],

  status: "Sale",

  keySpecifications: [
    "USB Plug & Play",
    "Ergonomic Grip Design",
    "Dual Vibration Feedback",
    "Compatible with Windows",
    "High-Precision Buttons",
  ],
}

,
  {
  id: 8,
  name: "Quilted Satin Jacket",
  price: 220,
  image: "/jaket.png",

  description:
    "Stylish quilted satin jacket designed for warmth and modern fashion appeal.",
  shortDescription: "Lightweight satin jacket with quilted design",

  rating: 4.7,
  reviews: 120,

  stock: 20,
  size: ["S", "M", "L", "XL"],

  status: "New",

  keySpecifications: [
    "Premium Satin Fabric",
    "Quilted Insulated Design",
    "Comfortable Inner Lining",
    "Durable Zipper Closure",
    "Modern Casual Fit",
  ],
}
,
    {
    id: 9,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    image: "/laptop.png",
  
    description:
      "ASUS FHD gaming laptop powered by Intel processor and high-end graphics.",
    shortDescription: "High-performance gaming laptop",
  
    rating: 4.8,
    reviews: 210,
  
    stock: 14,
    size: ["15.6-inch"],
  
    discountPercentage: 35,
    status: "Sale",
  
    keySpecifications: [
      "Intel Core i7 Processor",
      "16GB DDR4 RAM",
      "NVIDIA RTX Graphics",
      "512GB SSD Storage",
      "15.6-inch Full HD Display",
      "144Hz Refresh Rate",
    ],
  },
  {
  id: 10,
  name: "IPS LCD Gaming Monitor",
  price: 1160,
  image: "/monitor.png",

  description:
    "High quality IPS LCD gaming monitor delivering sharp visuals and smooth performance.",
  shortDescription: "IPS display with high refresh rate",

  rating: 4.7,
  reviews: 165,

  stock: 22,
  size: ["24-inch", "27-inch"],

  status: "Hot",

  keySpecifications: [
    "IPS LCD Panel",
    "Full HD / QHD Resolution",
    "165Hz Refresh Rate",
    "1ms Response Time",
    "AMD FreeSync Support",
    "Ultra-Thin Bezel Design",
  ],
}
,
  {
  id: 11,
  name: "HAVIT HV-G92 Gamepad",
  price: 560,
  image: "/gamepad1.png",

  description:
    "HAVIT HV-G92 gaming controller with ergonomic design for long gaming sessions.",
  shortDescription: "Ergonomic wired gamepad for PC gaming",

  rating: 4.6,
  reviews: 150,

  stock: 40,
  size: ["Standard"],

  status: "New",

  keySpecifications: [
    "Ergonomic Grip Design",
    "Dual Vibration Feedback",
    "High Precision Analog Sticks",
    "USB Plug & Play",
    "Compatible with Windows PC",
  ],
}
,
{
  id: 12,
  name: "AK-900 Wired Keyboard",
  price: 200,
  image: "/keyboard.png",

  description:
    "AK-900 wired mechanical keyboard designed for gaming and professional typing.",
  shortDescription: "Mechanical RGB keyboard with fast response",

  rating: 4.5,
  reviews: 180,

  stock: 35,
  size: ["Full Size"],

  status: "Hot",

  keySpecifications: [
    "Mechanical Key Switches",
    "RGB Backlit Keys",
    "Durable Aluminum Frame",
    "Anti-Ghosting Technology",
    "USB Wired Connection",
  ],
},
   {
    id: 13,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    image: "/laptop.png",
  
    description:
      "ASUS FHD gaming laptop powered by Intel processor and high-end graphics.",
    shortDescription: "High-performance gaming laptop",
  
    rating: 4.8,
    reviews: 210,
  
    stock: 14,
    size: ["15.6-inch"],
  
    discountPercentage: 35,
    status: "Sale",
  
    keySpecifications: [
      "Intel Core i7 Processor",
      "16GB DDR4 RAM",
      "NVIDIA RTX Graphics",
      "512GB SSD Storage",
      "15.6-inch Full HD Display",
      "144Hz Refresh Rate",
    ],
  },
  {
  id: 14,
  name: "IPS LCD Gaming Monitor",
  price: 1160,
  image: "/monitor.png",

  description:
    "High quality IPS LCD gaming monitor delivering sharp visuals and smooth performance.",
  shortDescription: "IPS display with high refresh rate",

  rating: 4.7,
  reviews: 165,

  stock: 22,
  size: ["24-inch", "27-inch"],

  status: "Hot",

  keySpecifications: [
    "IPS LCD Panel",
    "Full HD / QHD Resolution",
    "165Hz Refresh Rate",
    "1ms Response Time",
    "AMD FreeSync Support",
    "Ultra-Thin Bezel Design",
  ],
}
,
  {
  id: 15,
  name: "HAVIT HV-G92 Gamepad",
  price: 560,
  image: "/gamepad1.png",

  description:
    "HAVIT HV-G92 gaming controller with ergonomic design for long gaming sessions.",
  shortDescription: "Ergonomic wired gamepad for PC gaming",

  rating: 4.6,
  reviews: 150,

  stock: 40,
  size: ["Standard"],

  status: "New",

  keySpecifications: [
    "Ergonomic Grip Design",
    "Dual Vibration Feedback",
    "High Precision Analog Sticks",
    "USB Plug & Play",
    "Compatible with Windows PC",
  ],
}
,
{
  id: 16,
  name: "AK-900 Wired Keyboard",
  price: 200,
  image: "/keyboard.png",

  description:
    "AK-900 wired mechanical keyboard designed for gaming and professional typing.",
  shortDescription: "Mechanical RGB keyboard with fast response",

  rating: 4.5,
  reviews: 180,

  stock: 35,
  size: ["Full Size"],

  status: "Hot",

  keySpecifications: [
    "Mechanical Key Switches",
    "RGB Backlit Keys",
    "Durable Aluminum Frame",
    "Anti-Ghosting Technology",
    "USB Wired Connection",
  ],
},
];