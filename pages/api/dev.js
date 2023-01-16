import { company, plan, product } from "../../prisma";
import { hash } from "bcryptjs";

function getSlug({ id, name }) {
  return `${id + ""}-${name.toLowerCase().split(" ").join("-")}`;
}
const companyData = {
  password: "dev",
  name: "Dev3 Co.",
  owner: "Armando Mendozas3",
  email: "dev3@dev.com",
  city: "Sao Paolo",
  country: "Brasil",
  profilePicture: {
    url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673883720/lazy-buy/epxbduk5ibi6zfg8soob.png",
    public_id: "lazy-buy/epxbduk5ibi6zfg8soob",
  },
  plan: "Basic",
};
let productos = [
  {
    name: "T-Shirt",
    description: "100% cotton t-shirt in a variety of colors and sizes",
    price: 20,
    category: "Textile",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 153,
    isVisible: true,
    companyId: "",
    averageRating: 3.34,
  },
  {
    name: "Denim Jeans",
    description: "Classic blue denim jeans in various fits and sizes",
    price: 50,
    category: "Textile",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 25,
    isVisible: true,
    companyId: "",
    averageRating: 4.39,
  },
  {
    name: "Leather Handbag",
    description:
      "Stylish leather handbag with multiple pockets and compartments",
    price: 100,
    category: "Handicraft",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 56,
    isVisible: true,
    companyId: "",
    averageRating: 0.08,
  },
  {
    name: "Hand-Knitted Scarf",
    description: "Warm and cozy hand-knitted scarf made from 100% wool",
    price: 30,
    category: "Handicraft",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 173,
    isVisible: true,
    companyId: "",
    averageRating: 1.5,
  },
  {
    name: "Laptop",
    description:
      "15.6-inch laptop with an Intel Core i5 processor and 8GB of RAM",
    price: 600,
    category: "Electronics",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 186,
    isVisible: true,
    companyId: "",
    averageRating: 1.06,
  },
  {
    name: "Smartphone",
    description:
      "Latest model smartphone with a 6.5-inch display and dual cameras",
    price: 800,
    category: "Electronics",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 165,
    isVisible: true,
    companyId: "",
    averageRating: 4.05,
  },
  {
    name: "Headphones",
    description:
      "Noise-cancelling headphones with a comfortable over-ear design",
    price: 150,
    category: "Accessories",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 66,
    isVisible: true,
    companyId: "",
    averageRating: 1.12,
  },
  {
    name: "Watch",
    description: "Stylish and functional watch with a stainless steel band",
    price: 200,
    category: "Accessories",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 27,
    isVisible: true,
    companyId: "",
    averageRating: 4.12,
  },
  {
    name: "Sunglasses",
    description: "UV-protected sunglasses with a sleek and modern design",
    price: 50,
    category: "Accessories",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 14,
    isVisible: true,
    companyId: "",
    averageRating: 3.31,
  },
  {
    name: "Tote Bag",
    description: "Durable and eco-friendly tote bag made from organic cotton",
    price: 20,
    category: "Textile",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 91,
    isVisible: true,
    companyId: "",
    averageRating: 0.42,
  },
  {
    name: "Dress",
    description:
      "Flattering and feminine dress in a variety of styles and sizes",
    price: 80,
    category: "Textile",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 34,
    isVisible: true,
    companyId: "",
    averageRating: 3.88,
  },
  {
    name: "Hand-Woven Rug",
    description: "Beautiful hand-woven rug made from natural fibers",
    price: 150,
    category: "Handicraft",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 179,
    isVisible: true,
    companyId: "",
    averageRating: 4.81,
  },
  {
    name: "Ceramic Vase",
    description: "Elegant ceramic vase with a unique hand-painted design",
    price: 50,
    category: "Handicraft",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 119,
    isVisible: true,
    companyId: "",
    averageRating: 0.39,
  },
  {
    name: "Desktop Computer",
    description:
      "Powerful desktop computer with an Intel Core i7 processor and 16GB of RAM",
    price: 1000,
    category: "Electronics",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 9,
    isVisible: true,
    companyId: "",
    averageRating: 1.07,
  },
  {
    name: "Tablet",
    description:
      "10.1-inch tablet with a high-resolution display and long battery life",
    price: 400,
    category: "Electronics",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 167,
    isVisible: true,
    companyId: "",
    averageRating: 4.67,
  },
  {
    name: "Linen Shirt",
    description:
      "A stylish and comfortable linen shirt, available in multiple colors.",
    price: 50,
    category: "Textile",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 170,
    isVisible: true,
    companyId: "",
    averageRating: 2.74,
  },
  {
    name: "Hand-knit Scarf",
    description: "A warm and cozy scarf, hand-knit with high-quality wool.",
    price: 35,
    category: "Handicraft",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 125,
    isVisible: true,
    companyId: "",
    averageRating: 3.86,
  },
  {
    name: "Leather Handbag",
    description:
      "A timeless and fashionable leather handbag, perfect for everyday use.",
    price: 100,
    category: "Accessories",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 102,
    isVisible: true,
    companyId: "",
    averageRating: 0.03,
  },
  {
    name: "Stoneware Mug",
    description:
      "A sturdy and attractive stoneware mug, perfect for coffee or tea.",
    price: 20,
    category: "Handicraft",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 6,
    isVisible: true,
    companyId: "",
    averageRating: 2.68,
  },
  {
    name: "Smartwatch",
    description:
      "A high-tech smartwatch with a variety of features, including fitness tracking and mobile notifications.",
    price: 200,
    category: "Electronics",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 85,
    isVisible: true,
    companyId: "",
    averageRating: 4.03,
  },
  {
    name: "Silk Pillowcase",
    description:
      "A luxurious and gentle silk pillowcase, great for maintaining healthy hair and skin.",
    price: 30,
    category: "Textile",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 176,
    isVisible: true,
    companyId: "",
    averageRating: 3.52,
  },
  {
    name: "Hand-woven Rug",
    description:
      "A beautiful and unique hand-woven rug, made with natural fibers.",
    price: 150,
    category: "Handicraft",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 166,
    isVisible: true,
    companyId: "",
    averageRating: 3.63,
  },
  {
    name: "Leather Wallet",
    description:
      "A durable and stylish leather wallet, with plenty of space for cards and cash.",
    price: 40,
    category: "Accessories",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 159,
    isVisible: true,
    companyId: "",
    averageRating: 2.53,
  },
  {
    name: "Hand-painted Tote Bag",
    description:
      "A one-of-a-kind tote bag, hand-painted with a vibrant and eye-catching design.",
    price: 45,
    category: "Handicraft",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 45,
    isVisible: true,
    companyId: "",
    averageRating: 2.44,
  },
  {
    name: "Noise-cancelling Headphones",
    description:
      "High-quality headphones with advanced noise-cancelling technology, perfect for blocking out distractions.",
    price: 150,
    category: "Electronics",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 90,
    isVisible: true,
    companyId: "",
    averageRating: 2.73,
  },
  {
    name: "Cotton Towels",
    description:
      "Soft and absorbent cotton towels, available in a variety of colors and sizes.",
    price: 25,
    category: "Textile",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 49,
    isVisible: true,
    companyId: "",
    averageRating: 1.86,
  },
  {
    name: "Hand-carved Wood Bowl",
    description:
      "A unique and beautifully hand-carved wood bowl, perfect for serving salads or fruit.",
    price: 35,
    category: "Handicraft",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 140,
    isVisible: true,
    companyId: "",
    averageRating: 0.7,
  },
  {
    name: "Sterling Silver Earrings",
    description:
      "Elegant and timeless sterling silver earrings, suitable for any occasion.",
    price: 60,
    category: "Accessories",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 97,
    isVisible: true,
    companyId: "",
    averageRating: 1.24,
  },
  {
    name: "Hand-embroidered Pillow",
    description:
      "A stylish and colorful pillow, hand-embroidered with intricate designs.",
    price: 40,
    category: "Handicraft",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 141,
    isVisible: true,
    companyId: "",
    averageRating: 2.54,
  },
  {
    name: "Cotton T-Shirt",
    description: "A comfortable, casual t-shirt made of soft cotton material",
    price: 20,
    category: "Textile",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 100,
    isVisible: true,
    companyId: "",
    averageRating: 4.36,
  },
  {
    name: "Linen Napkins",
    description: "Set of 4 elegant napkins made of breathable linen material",
    price: 30,
    category: "Textile",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 82,
    isVisible: true,
    companyId: "",
    averageRating: 1.62,
  },
  {
    name: "Hand-Woven Rug",
    description: "A unique and colorful rug hand-woven by skilled artisans",
    price: 150,
    category: "Handicraft",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 82,
    isVisible: true,
    companyId: "",
    averageRating: 2.8,
  },
  {
    name: "Ceramic Vase",
    description: "A beautifully crafted vase made of glazed ceramic",
    price: 35,
    category: "Handicraft",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 116,
    isVisible: true,
    companyId: "",
    averageRating: 1.69,
  },
  {
    name: "Smartphone",
    description:
      "A high-performance smartphone with a sleek design and advanced features",
    price: 600,
    category: "Electronics",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 41,
    isVisible: true,
    companyId: "",
    averageRating: 4.86,
  },
  {
    name: "Laptop",
    description:
      "A lightweight and powerful laptop with a long-lasting battery",
    price: 800,
    category: "Electronics",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 86,
    isVisible: true,
    companyId: "",
    averageRating: 0.09,
  },
  {
    name: "Wireless Headphones",
    description:
      "Noise-cancelling headphones with a wireless design for ultimate convenience",
    price: 150,
    category: "Accessories",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 59,
    isVisible: true,
    companyId: "",
    averageRating: 0.05,
  },
  {
    name: "Leather Wallet",
    description: "A stylish and durable wallet made of genuine leather",
    price: 50,
    category: "Accessories",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 137,
    isVisible: true,
    companyId: "",
    averageRating: 3.33,
  },
  {
    name: "Silk Scarf",
    description: "A luxurious scarf made of soft and shimmering silk fabric",
    price: 30,
    category: "Textile",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 8,
    isVisible: true,
    companyId: "",
    averageRating: 1.68,
  },
  {
    name: "Denim Jacket",
    description: "A classic denim jacket with a relaxed fit and vintage wash",
    price: 80,
    category: "Textile",
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg",
      public_id:
        "lazy-buy/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx",
    },
    stock: 69,
    isVisible: true,
    companyId: "",
    averageRating: 2.72,
  },
];
let plans = [
  {
    planType: "Basic",
    description:
      "Start selling on our marketplace with no financial commitment by signing up for our Free plan, offering basic features for new and casual sellers.",
    productsLimit: 20,
    activeProductsLimit: 7,
    productPriority: 3,
    price: 0,
  },
  {
    planType: "Standard",
    description:
      "Elevate your sales to new heights with our Standard plan, everything you need to succeed as a top seller on our marketplace.",
    productsLimit: 70,
    activeProductsLimit: 30,
    productPriority: 2,
    price: 49,
  },
  {
    planType: "Premium",
    description:
      "Unlock the full potential of our marketplace and take your sales to the next level with our Premium plan, featuring exclusive features.",
    productsLimit: 9999,
    activeProductsLimit: 9999,
    productPriority: 1,
    price: 99,
  },
];
export default async function handler(req, res) {
  companyData.password = await hash(companyData.password, 12);

  const newCompany = await company.create({
    data: {
      name: companyData.name,
      owner: companyData.owner,
      email: companyData.email,
      city: companyData.city,
      country: companyData.country,
      profilePicture: companyData.profilePicture,
      plan: companyData.plan,
      access: {
        create: { password: companyData.password },
      },
    },
  });
  //------------------------------------------
  await (async () => {
    for (const productData of productos) {
      productData.slug = productData.name;
      productData.companyId = newCompany.id;

      let newProduct = await product.create({ data: productData });
      await product.update({
        where: { id: newProduct.id },
        data: { slug: getSlug(newProduct) },
      });
    }
  })();
  //------------------------------------------
  plans.map((planData) => {
    (async () => {
      await plan.create({ data: planData });
    })();
  });
  res.status(201).json({ status: "All Created, continue" });
}
