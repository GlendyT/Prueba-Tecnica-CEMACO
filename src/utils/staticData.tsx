import { ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface SubTabProps {
  id: number;
  title: string;
  icon?: ReactNode;
}

interface Producto {
  id: number;
  name: string;
  price: number;
  discount: number;
  regularPrice: number;
  image: string;
  quantityOffer: number;
  uniquePriceOffer: number;
}

interface HeroSection {
  id: number;
  title: string;
  desktopImage: string;
  mobileImage: string;
  productos: Producto[];
  bgColor: string;
}

interface FooterInfo {
  id: number;
  title: string;
  links: {
    id: number;
    name: string;
  }[];
}

interface BeforeFooterInfo {
  id: number;
  title: string;
  image: string;
}

interface SocialMedia {
  id: number;
  name: string;
  link: string;
  icon: string;
}

export interface dataSectionsProps {
  heroSections: HeroSection[];
}

export const subtab: SubTabProps[] = [
  {
    id: 1,
    title: "Departamentos",
    icon: <IoIosArrowDown size={24} />,
  },
  {
    id: 2,
    title: "Mesa de regalos",
  },
  {
    id: 3,
    title: "Revistas",
  },
  {
    id: 4,
    title: "Privilegio",
  },
];

export const subtitles: SubTabProps[] = [
  {
    id: 1,
    title: "Cocina y mesas",
  },
  {
    id: 2,
    title: "Muebles",
  },
  {
    id: 3,
    title: "Patio y jardín",
  },
  {
    id: 4,
    title: "Todo en ferretería ",
  },
];

export const Productos: Producto[] = [
  {
    id: 1,
    name: "Desinfectante en spray 12.5 oz - Lysol",
    price: 72.25,
    discount: 20,
    regularPrice: 74.99,
    image: "/lysol.webp",
    quantityOffer: 0,
    uniquePriceOffer: 0,
  },
  {
    id: 2,
    name: "Set de joyería con diseño de corazones - Accesorios Mia",
    price: 100.5,
    discount: 0,
    regularPrice: 0,
    image: "/babychair.webp",
    quantityOffer: 2,
    uniquePriceOffer: 59.99,
  },
  {
    id: 3,
    name: "Set de joyería con diseño de corazones - Accesorios Mia",
    price: 72.35,
    discount: 20,
    regularPrice: 74.99,
    image: "/fashionbead.webp",
    quantityOffer: 0,
    uniquePriceOffer: 0,
  },
  {
    id: 4,
    name: "Set de 4 vasos 12 oz",
    price: 49.99,
    discount: 0,
    regularPrice: 0,
    image: "/glasses.webp",
    quantityOffer: 3,
    uniquePriceOffer: 12,
  },
  {
    id: 5,
    name: "Silla Egnonómica Café y Negra con Respaldo de Malla",
    price: 1349.1,
    discount: 10,
    regularPrice: 1499.0,
    image: "/officechair.webp",
    quantityOffer: 0,
    uniquePriceOffer: 0,
  },
];

export const HistoriasDeNavidad: HeroSection[] = [
  {
    id: 1,
    title: "Historias de Navidad",
    desktopImage: "/2025oct-inspiracionNavidad-desk-00002.webp",
    mobileImage: "/2025oct-inspiracionNavidad-mob-00005.webp",
    productos: Productos,
    bgColor: "bg-[#C02026]",
  },
];

export const GalaFloral: HeroSection[] = [
  {
    id: 1,
    title: "Gala Floral",
    desktopImage: "/2025oct-inspiracionNavidad-desk-00003.webp",
    mobileImage: "/2025oct-inspiracionNavidad-mob-00002.webp",
    productos: Productos,
    bgColor: "bg-[#9C6F9B]",
  },
];

export const BosqueMagico: HeroSection[] = [
  {
    id: 1,
    title: "BosqueMagico",
    desktopImage: "/2025oct-inspiracionNavidad-desk-00004.webp",
    mobileImage: "/2025oct-inspiracionNavidad-mob-00003.webp",
    productos: Productos,
    bgColor: "bg-[#334D23]",
  },
];

export const ChispasDeDulzura: HeroSection[] = [
  {
    id: 1,
    title: "Chispas de Dulzura",
    desktopImage: "/2025oct-inspiracionNavidad-desk-00005.webp",
    mobileImage: "/2025oct-inspiracionNavidad-mob-00004.webp",
    productos: Productos,
    bgColor: "bg-[#E67BAD]",
  },
];

export const AuroraCosmica: HeroSection[] = [
  {
    id: 1,
    title: "Chispas de Dulzura",
    desktopImage: "/2025oct-inspiracionNavidad-desk-00001.webp",
    mobileImage: "/2025oct-inspiracionNavidad-mob-00001.webp",
    productos: Productos,
    bgColor: "bg-[#3B87B2]",
  },
];

export const beforeFooterInfo: BeforeFooterInfo[] = [
  {
    id: 1,
    title: "Compras seguras",
    image: "/2025-icono-tufelicidad-01.png",
  },
  {
    id: 2,
    title: "Entregas a todo el país",
    image: "/2025-icono-tufelicidad-02.png",
  },
  {
    id: 3,
    title: "Envío gratis en compras arriba de Q250",
    image: "/2025-icono-tufelicidad-03.png",
  },
  {
    id: 4,
    title: "Garantía Total",
    image: "/202509-icono-tufelicidad-004a.png",
  },
];

export const blueFooterInfo: BeforeFooterInfo[] = [
  {
    id: 1,
    title: "Tiendas",
    image: "/TiendasFooterNew.png",
  },
  {
    id: 2,
    title: "tusamigos@cemaco.com",
    image: "/Correo-tusamigos-cemaco-comFooterNew.png",
  },
  {
    id: 3,
    title: "Compra por WhatsApp",
    image: "/WhatsAppFooterNew.png",
  },
  {
    id: 4,
    title: "(502) 2499-9990",
    image: "/ServicioFooterNew.png",
  },
  {
    id: 5,
    title: "Chat en linea",
    image: "/FooterIconoChat.png",
  },
];

export const footerInfo: FooterInfo[] = [
  {
    id: 1,
    title: "Servicios",
    links: [
      {
        id: 1,
        name: "Instalaciones",
      },
      {
        id: 2,
        name: "Blog",
      },
      {
        id: 3,
        name: "Tiendas",
      },
      {
        id: 4,
        name: "Privilegio",
      },
      {
        id: 5,
        name: "Servicio a empresas",
      },
      {
        id: 6,
        name: "Bodas",
      },
      {
        id: 7,
        name: "Actividades",
      },
    ],
  },
  {
    id: 2,
    title: "Nuestros valores",
    links: [
      { id: 1, name: "Sostenibilidad" },
      { id: 2, name: "Garantía total" },
      { id: 3, name: "Sistema B" },
    ],
  },
  {
    id: 3,
    title: "Venta en línea",
    links: [
      { id: 1, name: "Retirar en tienda" },
      { id: 2, name: "Metodos de pago" },
      { id: 3, name: "Preguntas frecuentes" },
      { id: 4, name: "Instalar CEMACO.com" },
    ],
  },
  {
    id: 4,
    title: "Grupo CEMACO",
    links: [
      { id: 1, name: "Unete a nuestro equipo" },
      { id: 2, name: "Sobre nosotros" },
      { id: 3, name: "Deseas ser proveedor" },
      { id: 4, name: "Jugeton" },
      { id: 5, name: "Bebe Jugeton" },
    ],
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    name: "Tik Tok",
    link: "https://www.tiktok.com/@cemacogt_oficial?_t=8nYaIo29LN8&_r=1",
    icon: "/iconotiktokcemaco.png",
  },
  {
    id: 2,
    name: "Facebook",
    link: "https://www.facebook.com/cemacogt",
    icon: "/FacebookFooterNew.png",
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://www.instagram.com/cemacoguate/",
    icon: "/InstagramFooterNew.png",
  },
  {
    id: 4,
    name: "X",
    link: "https://x.com/cemaco_gt",
    icon: "/b8069eb9-5d31-44dd-b231-14ffe2dd7fda___bb8e2c32bae0674ffffb81549a434de6.webp",
  },
  {
    id: 5,
    name: "YouTube",
    link: "https://www.youtube.com/user/cemacogt",
    icon: "/YouTubeFooterNew.png",
  },
  {
    id: 6,
    name: "Pinterest",
    link: "https://www.pinterest.com.mx/cemacoguatemala/_created/",
    icon: "/PinterestFooterNew.png",
  },
];
