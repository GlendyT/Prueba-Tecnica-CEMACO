"use client";
import Image from "next/image";
import { ShoppingCart, ChevronDown, Menu } from "lucide-react";
import { subtab, subtitles } from "../utils/staticData";
import { useEffect, useState } from "react";
import { SearchBar, SubtitlesHeader } from "../utils/MapInfo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-gray-100 w-full  ">
        <h1 className=" font-semibold text-center text-sm">
          Todo para el regreso a clases a precios que te encantan.
          <br className="lg:hidden" />
          <span className="underline text-xs">Ver mas</span>
        </h1>
      </div>
      <div className="bg-white w-full flex flex-row h-10 items-center justify-between    ">
        <div className="flex flex-row w-full">
          <Image
            src="/CemacoLogo.webp"
            alt="Cemaco Logo"
            width={150}
            height={150}
            className=" w-24 object-contain px-3 py-2 bg-[#101e8d] rounded-t-sm cursor-pointer "
          />

          <Image
            src="/juguetonLogoOficial.webp"
            alt="Cemaco Logo"
            width={200}
            height={200}
            className=" w-24 object-contain p-1 bg-gray-50 rounded-t-sm cursor-pointer  "
            style={{ boxShadow: " 0px 4px 6px rgba(0, 0, 0, 0.5)" }}
          />
        </div>

        <SubtitlesHeader />

      </div>
      <header
        className={`bg-[#101e8d] w-full   h-auto px-6 max-lg:px-2 py-4 flex flex-col gap-2  text-white
          ${isScrolled ? "fixed top-0 left-0 z-50  shadow-lg " : "relative "}
          `}
      >
        <div className="flex flex-row max-lg:flex-col w-full gap-4 items-center justify-between ">
          <div className="flex flex-row max-lg:flex-row gap-8 max-sm:gap-2 w-full items-center justify-between">
            {isScrolled ? (
              <div className="flex flex-row items-center justify-center gap-2 ">
                <Menu className="cursor-pointer 2xl:hidden  " />
                <Image
                  src="/logoCortoMobile.png"
                  alt="Cemaco logo corto"
                  width={100}
                  height={100}
                  className="w-6 max-lg:hidden "
                />
                <h1 className="cursor-pointer max-sm:text-xs flex flex-row gap-2 max-lg:hidden ">
                  Departamentos
                  <ChevronDown size={24} />
                </h1>
                <h1 className="xl:hidden  ">Menu</h1>
              </div>
            ) : (
              <div className="flex flex-row items-center justify-center gap-1">
                <Menu className="cursor-pointer xl:hidden  " />
                <Image
                  src="/CemacoLogo.webp"
                  alt="Cemaco Logo"
                  width={150}
                  height={150}
                  className={` w-44 object-contain h-auto max-sm:w-auto max-sm:h-auto  `}
                />
              </div>
            )}

            <div
              className={`w-full flex flex-row items-center justify-center  bg-white rounded-full px-4 py-2  ${
                isScrolled ? "" : "max-lg:hidden"
              } `}
            >
              <SearchBar />
            </div>

            <div className="w-auto flex flex-row items-center justify-end gap-2 max-sm:gap-2">
              <div className="flex flex-row w-40 gap-2 max-sm:w-auto items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="white"
                >
                  <path
                    className="cemacogt-cemaco-components-0-x-customLoginIconPath"
                    id="Trazado_142908"
                    data-name="Trazado 142908"
                    d="M551.593-116.855a13.015,13.015,0,0,0-13,13,13.015,13.015,0,0,0,13,13,13.015,13.015,0,0,0,13-13A13.015,13.015,0,0,0,551.593-116.855Zm-11.864,13a11.877,11.877,0,0,1,11.864-11.864,11.877,11.877,0,0,1,11.864,11.864,11.8,11.8,0,0,1-3.069,7.935,10.3,10.3,0,0,0-5.9-4.446,6.1,6.1,0,0,0,3.193-5.355,6.1,6.1,0,0,0-6.09-6.09,6.1,6.1,0,0,0-6.089,6.09,6.094,6.094,0,0,0,3.223,5.369,10.287,10.287,0,0,0-5.88,4.485A11.8,11.8,0,0,1,539.729-103.855Z"
                    transform="translate(-538.593 116.855)"
                  ></path>
                </svg>
                <h1 className="cursor-pointer max-sm:text-xs flex flex-row gap-2">
                  Iniciar sesión
                  <ChevronDown size={24} className="max-sm:hidden" />
                </h1>
              </div>
              <ShoppingCart size={24} className="cursor-pointer" />
            </div>
          </div>
          <div
            className={`w-full flex flex-row items-center justify-center  bg-white rounded-full px-4 py-2 xl:hidden md:hidden ${
              isScrolled ? "hidden" : ""
            }   `}
          >
            <SearchBar />
          </div>
        </div>

        {/* SUB TAB */}
        <div
          className={`flex flex-row justify-between items-center max-lg:hidden ${
            isScrolled ? "hidden" : ""
          } `}
        >
          <nav className="flex flex-row gap-10">
            {subtab.map((item) => (
              <h1
                key={item.id}
                className="flex flex-row gap-1 items-center justify-center font-semibold"
              >
                {item.title}
                <span>{item.icon}</span>
              </h1>
            ))}
          </nav>
          <nav className="flex flex-row gap-10">
            <h1 className="flex flex-row items-center justify-center gap-1">
              <Image
                src="/car.webp"
                alt="Entrega rapida"
                width={40}
                height={40}
                className="object-contain"
              />
              Entrega rápida
            </h1>
            <h1 className="flex flex-row items-center justify-center gap-1">
              <Image
                src="/package.webp"
                alt="Entrega rapida"
                width={40}
                height={40}
                className="object-contain"
              />
              Retira en tiendas
            </h1>
          </nav>
        </div>
      </header>
      <div className="bg-white w-full flex flex-row  py-1 max-sm:py-2 items-center justify-center gap-8 border-gray-500 border ">
        {subtitles.map((item) => (
          <h1 className="text-gray-500 max-sm:text-xs " key={item.id}>
            {item.title}
          </h1>
        ))}
      </div>
    </>
  );
};

export default Header;
