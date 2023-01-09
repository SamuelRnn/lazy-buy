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
    url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
    public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
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
    isActive: true,
    companyId: "",
  },
];
let plans = [
  {
    planType: "Basic",
    productsLimit: 10,
    activeProductsLimit: 7,
    productPriority: 1,
    price: 1,
  },
  {
    planType: "Standard",
    productsLimit: 15,
    activeProductsLimit: 10,
    productPriority: 2,
    price: 2,
  },
  {
    planType: "Premium",
    productsLimit: 9999,
    activeProductsLimit: 9999,
    productPriority: 3,
    price: 3,
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
  // productos.map(async (productData) => {

  //   productData.slug = product.name;
  //   productData.companyId = newCompany.id;
  //   let newProduct = await product.create({ data: productData });
  //   newProduct = await product.update({
  //     where: { id: newProduct.id },
  //     data: { slug: getSlug(newProduct) },
  //   });

  // });
  productos.map((productData) => {
    productData.slug = productData.name;
    productData.companyId = newCompany.id;

    (async () => {
      let newProduct = await product.create({ data: productData });
      await product.update({
        where: { id: newProduct.id },
        data: { slug: getSlug(newProduct) },
      });
    })();
  });
  //------------------------------------------
  plans.map((planData) => {
    (async () => {
      await product.create({ data: planData });
    })();
  });
  res.status(201).json({ status: "All Created, continue" });
}
