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
    name: "Samsung Galaxy A13",
    description: "Dispositivo móvil",
    price: 730.4,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 8,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "Zakapillas Nike Downshiffter 11",
    description: "Zapatillas deporitivas, comodas para hacer deportes",
    price: 950,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 5,
    isActive: true,
    category: "Calzado",
    companyId: "",
  },
  {
    name: "Camisa Manga Larga",
    description: "Camisa de Algodon, ",
    price: 755.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 21,
    isActive: true,
    category: "Vestimenta",
    companyId: "",
  },
  {
    name: "Smartwach Bracelet",
    description: "Reloj comodo, para aplicaciones moviles",
    price: 555.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 14,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "Teclado Organo Musical",
    description: "Instrumento de musica, con teclas",
    price: 367.65,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 15,
    isActive: true,
    category: "Musica",
    companyId: "",
  },
  {
    name: "Moto E20",
    description: "Dispositivo movil, larga duracion de bateria ",
    price: 850.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 18,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "Disco Solido Interno",
    description: "Tarjeta de memoria ram, para computadoras",
    price: 250.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 6,
    isActive: true,
    category: "computacion",
    companyId: "",
  },
  {
    name: "Zapatillas Waffle Trainer",
    description: "Zapatillas para activida fisica, ligeras, y super comodas",
    price: 675.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 5,
    isActive: true,
    category: "Calzados",
    companyId: "",
  },
  {
    name: "Buzo Canguro Capucha",
    description: "Vestimenta abrigada, 100% algodon ",
    price: 675.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 6,
    isActive: true,
    category: "Vestimenta",
    companyId: "",
  },
  {
    name: "Flauta Dulce Yamaha",
    description: "Instrumento de viento",
    price: 222.5,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 10,
    isActive: true,
    category: "Musica",
    companyId: "",
  },
  {
    name: "iPhone SE",
    description: "Dispositivo movil",
    price: 973.5,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 3,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "Zapatos de Vestir Cuero",
    description: "Zapatos de vestir, ideales para ir a trabajar, 100% cuero",
    price: 750.3,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 16,
    isActive: true,
    category: "Calzado",
    companyId: "",
  },
  {
    name: "Fuente Solarmax",
    description: "Fuente de 700w, ideal para computadoras",
    price: 769.85,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 5,
    isActive: true,
    category: "computacion",
    companyId: "",
  },
  {
    name: "Sweater Hombre Tipo Polera",
    description: "Polera, ideal para el otoño/invierno, 100% poliéster",
    price: 355,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 4,
    isActive: true,
    category: "Vestimenta",
    companyId: "",
  },
  {
    name: "Audiculares in-ear",
    description: "Audiculares, manolibre, ideal para deportes o videojuegos",
    price: 666,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 4,
    isActive: true,
    category: "Musica",
    companyId: "",
  },
  {
    name: "Xioami Redmi 9C",
    description: "Dispositivo movil, con excelente calidad de imagen",
    price: 656.4,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 14,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "Ojota Mujer de Cuero",
    description: "Ojotas, para uso diario, 100% cuero",
    price: 975,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 11,
    isActive: true,
    category: "Calzado",
    companyId: "",
  },
  {
    name: "Gabinete RedDragon",
    description: "Gabinete para computadora, con RGB",
    price: 999,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 3,
    isActive: true,
    category: "Computacion",
    companyId: "",
  },
  {
    name: "Bateria Acustica",
    description: "Instrumento musical, de percusion  ",
    price: 333.5,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 3,
    isActive: true,
    category: "Musica",
    companyId: "",
  },
  {
    name: "Campera Deporitva Rompeviento",
    description:
      "Campera ideal para la primavera/verano, Gimnasio, Running, Rompeviento",
    price: 767,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 6,
    isActive: true,
    category: "Vestimenta",
    companyId: "",
  },
  {
    name: "Motorola Edge 30",
    description: "Dispositivo Movil, con excelente calidad de imagen",
    price: 444.5,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 37,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "Guitarra criolla",
    description: "Dispositivo Movil, con excelente calidad de imagen",
    price: 664,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 23,
    isActive: true,
    category: "Musica",
    companyId: "",
  },
  {
    name: "Smart TV Samsung 43Pulgadas",
    description: "Pantalla 4k, Pantalla Oled inteligencia cognitiva, Smart TV",
    price: 609,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 12,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "Sansung Galaxy S20",
    description: "Dispositivo movil, 4K de camara frontal",
    price: 999,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 3,
    isActive: true,
    category: "tecnología",
    companyId: "",
  },
  {
    name: "Campera de cuero",
    description: "Campera 100% cuero, temporada Otoño/Invierno",
    price: 753,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 2,
    isActive: true,
    category: "vestimenta",
    companyId: "",
  },
  {
    name: "Parlante Aliver Iggy",
    description: "Parlante de musica, con tiras led ",
    price: 456,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 6,
    isActive: true,
    category: "Musica",
    companyId: "",
  },
  {
    name: "Aire acondicionado",
    description:
      "Electrodoméstico, con frio/calor, ideal para el verano/invierno ",
    price: 332,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 3,
    isActive: true,
    category: "electrodoméstico",
    companyId: "",
  },
  {
    name: "Microondas",
    description: "Electrodoméstico, ideal para recalentar comidas ",
    price: 332,
    mainImage: {
      url: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673033931/lazy-buy/fodpv8nlpc1uynqep0lf.jpg",
      public_id: "lazy-buy/fodpv8nlpc1uynqep0lf",
    },
    stock: 7,
    isActive: true,
    category: "electrodoméstico",
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
  // productos.map(async (productData) => {

  //   productData.slug = product.name;
  //   productData.companyId = newCompany.id;
  //   let newProduct = await product.create({ data: productData });
  //   newProduct = await product.update({
  //     where: { id: newProduct.id },
  //     data: { slug: getSlug(newProduct) },
  //   });

  // });
  productos.map((productData, index) => {
    productData.slug = productData.name;
    productData.companyId = newCompany.id;

    (async () => {
      let newProduct = await product.create({ data: productData });

      console.log("product creado!(?");
      console.log(newProduct);

      await product
        .update({
          where: { id: newProduct.id },
          data: { slug: getSlug(newProduct) },
        })
        .then((res) => console.log(index, res));
    })();
  });

  res.status(201).json({ ok: true });
}
