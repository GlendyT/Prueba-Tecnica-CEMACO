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
