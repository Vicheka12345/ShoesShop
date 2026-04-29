import s1 from "../image/service_delivery.png";
import s2 from "../image/service_returns.png";
import s3 from "../image/service_repair.png";
import s4 from "../image/service_fitting.png";
import s5 from "../image/service_wrapping.png";
import s6 from "../image/service_finance.png";

import run from "../image/Runing.jpg";
import Causal from "../image/causal.jpg";
import Causal1 from "../image/causal1.jpg";
import Causal2 from "../image/causal2.jpg";
import Causal4 from "../image/causal4.jpg";

import Outdoor from "../image/outdoor.jpg";
import Outdoor1 from "../image/outdoor1.jpg";
import Outdoor2 from "../image/outdoor2.jpg";

import Luxury from "../image/luxury.jpg";
import Luxury1 from "../image/luxury1.jpg";
import Luxury2 from "../image/luxury2.jpg";
import Luxury3 from "../image/luxury3.jpg"; // ✅ fixed

import Sport from "../image/sport.jpg";
import Sport1 from "../image/sport1.jpg";
import Sport2 from "../image/sport2.jpg";
import Sport3 from "../image/sport3.jpg";

import Kid from "../image/kid.jpg";
import Kid1 from "../image/kid1.jpg";
import Kid2 from "../image/kid2.jpg";
import Kid3 from "../image/kid3.jpg";

import run1 from "../image/run1.jpg";
import run2 from "../image/run2.jpg";
import run3 from "../image/run3.jpg";
import run5 from "../image/run5.jpg";
import run6 from "../image/run6.jpg";
import run7 from "../image/run7.jpg";
import run8 from "../image/run8.jpg";

const defaultFields = {
  oldPrice: null,
  badge: null,
  colors: [],
};

export const products = [
  {
    id: 1,
    name: "Air Velocity Pro",
    category: "Running",
    price: 189,
    oldPrice: 239,
    image: run,
    badge: "New",
    colors: ["#0d0d0d", "#c9a84c", "#8b2635"],
    desc: "Engineered for elite performance...",
    tags: ["Running", "Men"],
  },

  {
    id: 3,
    name: "Cloud Walker Slip-On",
    category: "Casual",
    price: 129,
    oldPrice: 159,
    image: Causal,
    badge: "Sale",
    colors: ["#f5f0e8", "#c9a84c"],
    desc: "Effortless style meets comfort...",
    tags: ["Casual", "Women"],
  },

  {
    id: 4,
    name: "Trail Blazer Hiker",
    category: "Outdoor",
    price: 215,
    image: Outdoor,
    desc: "Built for demanding terrain...",
    tags: ["Outdoor", "Unisex"],
    ...defaultFields,
  },

  {
    id: 5,
    name: "Velvet Court Heels",
    category: "Luxury",
    price: 345,
    oldPrice: 420,
    image: Luxury,
    badge: "Limited",
    colors: ["#8b2635", "#0d0d0d"],
    desc: "An evening essential...",
    tags: ["Luxury", "Women"],
  },

  {
    id: 6,
    name: "Street Flex Trainer",
    category: "Sport",
    price: 149,
    oldPrice: 179,
    image: Sport,
    badge: "Sale",
    colors: ["#e8e8e8", "#ff6b35"],
    desc: "Versatile training shoe...",
    tags: ["Sport", "Unisex"],
  },

  {
    id: 7,
    name: "Mule Clog Sandal",
    category: "Casual",
    price: 95,
    image: Causal4,
    desc: "Modern mule design...",
    tags: ["Casual", "Women"],
    ...defaultFields,
  },

  {
    id: 8,
    name: "Kids Runner Spark",
    category: "Kids",
    price: 79,
    oldPrice: 99,
    image: Kid,
    badge: "New",
    colors: ["#ff6b35"],
    desc: "Bright and playful...",
    tags: ["Kids"],
  },

  // RUNNING
  {
    id: 9,
    name: "Zoom Elite Runner",
    category: "Running",
    price: 160,
    oldPrice: 190,
    image: run1,
    badge: "Limited",
    colors: ["#000", "#fff"],
    desc: "Lightweight and responsive...",
    tags: ["Running", "Men"],
  },

  {
    id: 10,
    name: "Marathon Pro",
    category: "Running",
    price: 210,
    oldPrice: 250,
    image: run2,
    badge: "Premium",
    colors: ["#333"],
    desc: "Ultimate long-distance shoe...",
    tags: ["Running", "Unisex"],
  },

  {
    id: 11,
    name: "Skyward Aero",
    category: "Running",
    price: 175,
    image: run3,
    badge: "New",
    desc: "Aerodynamic design...",
    tags: ["Running", "Women"],
    ...defaultFields,
  },

  {
    id: 12,
    name: "Sprint Master",
    category: "Running",
    price: 145,
    oldPrice: 170,
    image: run8,
    badge: "Sale",
    desc: "Explosive speed performance...",
    tags: ["Running", "Men"],
    colors: [],
  },

  {
    id: 13,
    name: "Endurance Peak",
    category: "Running",
    price: 195,
    image: run5,
    desc: "Built for endurance...",
    tags: ["Running", "Unisex"],
    ...defaultFields,
  },

  {
    id: 14,
    name: "Velocity X",
    category: "Running",
    price: 180,
    oldPrice: 200,
    image: run6,
    badge: "Hot",
    desc: "High-performance traction...",
    tags: ["Running", "Men"],
    colors: [],
  },

  {
    id: 15,
    name: "Cloud Dash",
    category: "Running",
    price: 155,
    oldPrice: 180,
    image: run7,
    badge: "Sale",
    desc: "Cloud-like cushioning...",
    tags: ["Running", "Women"],
    colors: [],
  },

  // CASUAL
  {
    id: 16,
    name: "Urban Loafer",
    category: "Casual",
    price: 110,
    image: Causal1,
    desc: "Daily comfort loafer...",
    tags: ["Casual", "Men"],
    ...defaultFields,
  },

  {
    id: 17,
    name: "Canvas Daily",
    category: "Casual",
    price: 85,
    image: Causal2,
    desc: "Simple weekend shoe...",
    tags: ["Casual", "Unisex"],
    ...defaultFields,
  },

  {
    id: 18,
    name: "Street Ease",
    category: "Casual", // ✅ fixed
    price: 95,
    image: Causal,
    desc: "Modern comfort style...",
    tags: ["Casual", "Women"],
    ...defaultFields,
  },

  // OUTDOOR
  {
    id: 19,
    name: "Mountain Peak",
    category: "Outdoor",
    price: 240,
    image: Outdoor1,
    badge: "Durable",
    desc: "Heavy-duty boots...",
    tags: ["Outdoor", "Men"],
    colors: [],
  },

  {
    id: 20,
    name: "Valley Trekker",
    category: "Outdoor",
    price: 180,
    image: Outdoor2,
    desc: "Waterproof hiking shoes...",
    tags: ["Outdoor", "Women"],
    ...defaultFields,
  },

  // LUXURY
  {
    id: 21,
    name: "Gold Leaf Stiletto",
    category: "Luxury",
    price: 450,
    image: Luxury1,
    badge: "Exclusive",
    desc: "Elegant design...",
    tags: ["Luxury", "Women"],
    colors: [],
  },

  {
    id: 22,
    name: "Diamond Tuxedo Shoe",
    category: "Luxury",
    price: 520,
    image: Luxury2,
    desc: "Formal luxury peak...",
    tags: ["Luxury", "Men"],
    ...defaultFields,
  },

  {
    id: 23,
    name: "Silk Ribbon Sandal",
    category: "Luxury",
    price: 380,
    image: Luxury3,
    desc: "Silk-crafted elegance...",
    tags: ["Luxury", "Women"],
    ...defaultFields,
  },

  // SPORT
  {
    id: 24,
    name: "Court King",
    category: "Sport",
    price: 130,
    image: Sport1,
    desc: "Basketball grip...",
    tags: ["Sport", "Men"],
    ...defaultFields,
  },

  {
    id: 25,
    name: "Power Lift",
    category: "Sport",
    price: 165,
    image: Sport2,
    desc: "Strength training shoe...",
    tags: ["Sport", "Unisex"],
    ...defaultFields,
  },

  {
    id: 26,
    name: "Aero Swim Slide",
    category: "Sport",
    price: 45,
    image: Sport3,
    desc: "Quick-dry comfort...",
    tags: ["Sport", "Unisex"],
    ...defaultFields,
  },

  // ✅ Added missing ID
  {
    id: 27,
    name: "Mini Sport Flex",
    category: "Sport",
    price: 60,
    image: Sport,
    desc: "Light sport shoes for daily wear...",
    tags: ["Sport"],
    ...defaultFields,
  },

  // KIDS
  {
    id: 28,
    name: "Little Explorer",
    category: "Kids",
    price: 65,
    image: Kid1,
    desc: "Outdoor kids boots...",
    tags: ["Kids"],
    ...defaultFields,
  },

  {
    id: 29,
    name: "Playtime Pro",
    category: "Kids",
    price: 55,
    image: Kid2,
    desc: "Flexible and fun...",
    tags: ["Kids"],
    ...defaultFields,
  },

  {
    id: 30,
    name: "School Smart Oxford",
    category: "Kids",
    price: 70,
    image: Kid3,
    desc: "Comfortable school shoe...",
    tags: ["Kids"],
    ...defaultFields,
  },
];

export const categories = [
  "All",
  "Running",
  "Casual",
  "Outdoor",
  "Luxury",
  "Sport",
  "Kids",
];

export const services = [
  {
    img: s1,
    title: "Free Express Delivery",
    desc: "Orders over $120 ship free...",
  },
  {
    img: s2,
    title: "90-Day Easy Returns",
    desc: "Return within 90 days...",
  },
  {
    img: s3,
    title: "Lifetime Repair Service",
    desc: "We repair your shoes...",
  },
  {
    img: s4,
    title: "Custom Fitting",
    desc: "Get your perfect size...",
  },
  {
    img: s5,
    title: "Gift Wrapping",
    desc: "Premium packaging...",
  },
  {
    img: s6,
    title: "Buy Now, Pay Later",
    desc: "Flexible payment plans...",
  },
];
