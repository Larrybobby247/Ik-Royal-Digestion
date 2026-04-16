// ================================================
// data.js — All brand data for Ik Royal Digestion
// ================================================

import { faBoxOpen, faCrown, faTruckFast, faUtensils } from "@fortawesome/free-solid-svg-icons";

// NOTE: Icon imports below require @fortawesome/free-solid-svg-icons
// Product image imports require your actual image assets in ../assets/
import Product1 from '../assets/product1.jpg';
import Product2 from '../assets/product2.jpg';
import Product3 from '../assets/product3.jpg';
import Product4 from '../assets/product4.jpg';
import Product5 from '../assets/product5.jpg';
import Product6 from '../assets/product6.jpg';
import Product7 from '../assets/product7.jpg';
import Product8 from '../assets/product8.jpg';

export const brandInfo = {
  name: "Ik Royal Digestion",
  heroHeading: "Experience Food Fit for Royalty",
  heroDescription:
    "Quality you trust, taste you love. From smoky party Jollof to premium seafood delicacies, we bring the royal feast to your doorstep in Ibadan.",
  contactDescription:
    "Ready to treat yourself? Our kitchen is open and ready to serve your royal cravings.",
  footerDescription:
    "Ibadan's premier food vendor specializing in homemade goodness and royal catering experiences since our rebranding from Ikeoluwa's Kitchen.",
  colors: {
    primary: "#E6A119",
    secondary: "#FFD700",
    dark: "#1A1A1A",
  },
  contact: {
    phone: "+234 802 664 9762",
    email: "ikroyaldigestion@gmail.com",
    address: "Odekunle, Agbowo UI, Opposite Ade Summer Driving School, Ibadan",
    workingDays: "Mon - Sat: 9:00 AM - 6:00 PM",
    whatsapp: "https://wa.me/2348026649762",
    instagram: "https://instagram.com/ikroyaldigestion",
  },
};

export const whyChooseUs = [
  {
    id: 1,
    title: "Royal Taste",
    iconName: faCrown,
    description: "Authentic smoky flavors crafted with premium ingredients.",
    color: "#E6A119",
  },
  {
    id: 2,
    title: "Safe Packaging",
    iconName: faBoxOpen,
    description: "Spill-proof, hygienic seals to keep your food fresh.",
    color: "#FFD700",
  },
  {
    id: 3,
    title: "Bellefull Portions",
    iconName: faUtensils,
    description: "Generous servings that ensure you are truly satisfied.",
    color: "#E6A119",
  },
  {
    id: 4,
    title: "Swift Delivery",
    iconName: faTruckFast,
    description: "Reliable dispatch across all major areas in Ibadan.",
    color: "#FFD700",
  },
];

export const products = [
  {
    id: 1,
    name: "Bulk Jollof Bowl (4L)",
    arrival: "top",
    imagePlaceholder: Product1,
    category: "Bulk",
    description: "Standard 4L bowl of smoky party Jollof.",
  },
  {
    id: 2,
    name: "Bellefull Combo",
    arrival: "regular",
    imagePlaceholder: Product2,
    category: "Lunch",
    description: "Jollof, chicken, dodo, and a drink.",
  },
  {
    id: 3,
    name: "Royal Seafood Okro",
    arrival: "top",
    imagePlaceholder: Product3,
    category: "Soups",
    description: "Loaded with prawns, crab, and fish.",
  },
  {
    id: 4,
    name: "Luxury Food Tray",
    arrival: "top",
    imagePlaceholder: Product4,
    category: "Gifts",
    description: "The ultimate birthday/anniversary food tray.",
  },
  {
    id: 5,
    name: "Executive Royal Box",
    arrival: "regular",
    imagePlaceholder: Product5,
    category: "Lunch",
    description: "Basmati rice and premium proteins for office lunch.",
  },
  {
    id: 6,
    name: "Peppered Protein Bucket",
    arrival: "regular",
    imagePlaceholder: Product6,
    category: "Proteins",
    description: "Spicy turkey or gizzard buckets.",
  },
  {
    id: 7,
    name: "Village Native Rice",
    arrival: "regular",
    imagePlaceholder: Product7,
    category: "Bulk",
    description: "Rich palm oil rice with dried fish and iru.",
  },
  {
    id: 8,
    name: "Royal Egusi & Swallow",
    arrival: "top",
    imagePlaceholder: Product8,
    category: "Soups",
    description: "Lumpy Egusi with assorted meat and pounded yam.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Toluwani A.",
    comment: "The Jollof is actually smoky! Best I've had in Ibadan.",
    rating: 5,
    product: "Bulk Jollof",
  },
  {
    id: 2,
    name: "Dr. Adeola",
    comment: "Professional packaging and the portion size is massive.",
    rating: 5,
    product: "Executive Box",
  },
  {
    id: 3,
    name: "Eniola S.",
    comment: "That Seafood Okro is a life changer. So much protein!",
    rating: 5,
    product: "Seafood Okro",
  },
  {
    id: 4,
    name: "Michael F.",
    comment: "Sent a tray to my mum; she loved the presentation!",
    rating: 4,
    product: "Gifts",
  },
];
