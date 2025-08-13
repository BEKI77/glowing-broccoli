import { BEDS, CABINETS, DINNING_TABLE, image_links, SOFA } from "./images-links";

export const featuredProducts = [
  {
    id: 1,
    name: "Rustic Oak Dining Table",
    image: DINNING_TABLE["image1"],
    description: "A handcrafted oak dining table with a rustic finish, perfect for family gatherings and adding warmth to your dining space.",
    category: "Tables",
    featured: true,
  },
  {
    id: 2,
    name: "Kitchen Cabinet",
    image: CABINETS["image1"],
    description: "Spacious and elegant, this kitchen cabinet offers ample storage and a timeless design to organize your kitchen essentials.",
    category: "Kitchen",
    featured: true,
  },
  {
    id: 3,
    name: "Vintage Wooden Bed",
    image: BEDS["image1"],
    description: "A vintage-inspired wooden bed frame, expertly crafted for comfort and style, bringing classic charm to any bedroom.",
    category: "Storage",
    featured: true,
  },
  {
    id: 4,
    name: "Vintage Wooden Bed",
    image: SOFA["image1"],
    description: "A vintage-inspired wooden bed frame, expertly crafted for comfort and style, bringing classic charm to any bedroom.",
    category: "Storage",
    featured: true,
  },
]


export const gallary_products = Object.entries(image_links).map(([key, url], idx) => ({
  id: idx + 1,
  name: `Product ${idx + 1}`,
  image: url,
  description: `Gallery product image ${idx + 1}`,
  category: "Gallery",
  featured: false,
}));