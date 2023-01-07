import { company, plan, product } from "../../prisma";
import { hash } from "bcryptjs";

function getSlug({ id, name }) {
  return `${id + ""}-${name.toLowerCase().split(" ").join("-")}`;
}
const companyData = {
  password: "dev",
  name: "Dev Co.",
  owner: "Armando Mendoza",
  email: "dev@dev.com",
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
    name: "i phone 15",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "Casacas Bombert Jacket De Hombre Chaqueta De Aviador Bombert",
    description:
      "Como Opción tenemos MERCADO PAGO, es seguro, confiable y puedes efectuar el pago de donde te encuentres con tarjetas de crédito, débito y pagos en efectivo en agente y mucho más. Al finalizar el pago aparecerá nuestro número de contacto para coordinar la entrega.",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "textiles",
    companyId: "",
  },
  {
    name: "Bombert Jacket De Hombre Chaquete De Hombre Combert",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "i Phone 15",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "prueba 1",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "prueba 2",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "i Phone 15",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "prueba 1",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "prueba 2",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "i Phone 15",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "prueba 1",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "prueba 2",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "i Phone 15",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "prueba 1",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "prueba 2",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "i Phone 15",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "prueba 1",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "prueba 2",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "i Phone 15",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "prueba 1",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "prueba 2",
    description:
      "la reencarnacion de steve jobs hecha telefono, con gran pantalla de alta resolucion",
    price: 800.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "tecnología",
    companyId: "",
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

  await Promise.all(
    productos.map(async (productData) => {
      productData.slug = "available";
      productData.companyId = newCompany.id;
      let newProduct = await product.create({ data: productData });
      newProduct = await product.update({
        where: { id: newProduct.id },
        data: { slug: getSlug(newProduct) },
      });
    })
  );

  res.status(201).json({ ok: true });
}
