import Link from "next/link";
import {
  beforeFooterInfo,
  footerInfo,
  socialMedia,
  subtitles,
} from "./staticData";
import Image from "next/image";
import { Search } from "lucide-react";

export const SocialMedia = () => {
  return (
    <>
      {socialMedia.map((item) => (
        <Link key={item.id} href={item.link} rel="noopener" target="_blank">
          <Image
            src={item.icon}
            alt="Logo de {item.name}"
            width={100}
            height={100}
            className="w-7 h-7"
          />
        </Link>
      ))}
    </>
  );
};

export const FooterLinks = () => (
  <div className=" max-lg:hidden flex flex-row  gap-2">
    {footerInfo.map((general) => (
      <div key={general.id} className="flex flex-col items-start ">
        <h2 className="font-extrabold pb-2">{general.title}</h2>
        <div className="flex flex-col items-start">
          {general.links.map((routes) => (
            <h1
              key={routes.id}
              className="hover:underline cursor-pointer font-light  pr-2"
            >
              {routes.name}
            </h1>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const CardsContainer = () => (
  <div className="hidden sm:flex flex-row justify-center gap-4 px-8">
    {beforeFooterInfo.map((cards) => (
      <div
        key={cards.id}
        className="flex flex-row w-full gap-2 items-center text-start justify-center border-2 border-gray-200 rounded-2xl px-4 py-2"
      >
        <Image
          src={cards.image}
          alt="Icono de{cards.title}"
          width={100}
          height={100}
          className="p-1 w-12"
        />
        <h1 className="text-xs text-gray-500 font-semibold">{cards.title}</h1>
      </div>
    ))}
  </div>
);

export const SubscribeSection = () => (
  <>
    <input
      type="email"
      className="bg-white  rounded-full py-2 w-full border border-gray-400 outline-[#94d500] "
      aria-label="ejemplo@correo.com "
    />
    <button
      type="submit"
      className="text-white bg-[#101E8D]  py-1 uppercase px-6 rounded-full text-sm font-semibold"
    >
      suscribirme
    </button>
  </>
);

export const SearchBar = () => (
  <>
    <input
      type="text"
      placeholder="Buscar"
      className="w-full  placeholder-gray-500 outline-none  "
    />
    <Search
      className={`text-[#101e8d] bg-[#94d500] p-1 rounded-full cursor-pointer `}
      size={24}
    />
  </>
);

export const SubtitlesHeader = () => (
  <div className="flex flex-row w-full pr-8 justify-end max-sm:px-0 gap-4 max-sm:gap-1   ">
    {subtitles.map((item) => (
      <h1
        className="text-gray-500  max-sm:text-xs cursor-pointer sm:line-clamp-1 "
        key={item.id}
      >
        {item.title}
      </h1>
    ))}
  </div>
);
