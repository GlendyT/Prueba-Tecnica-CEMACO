"use client";
import { dataSectionsProps } from "@/src/utils/staticData";
import Image from "next/image";
import { formatPriceWithParts } from "../utils/formatters";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SectionComponent = ({ heroSections }: dataSectionsProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 640);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="min-h-screen px-8 max-sm:px-0 w-full flex justify-center bg-gray-200 ">
      {heroSections.map((heroSection) => (
        <div key={heroSection.id} className="flex flex-col   w-full ">
          <Image
            src={isMobile ? heroSection.mobileImage : heroSection.desktopImage}
            alt={`Seccion ${heroSection.title}`}
            width={1920}
            height={1080}
            className={isMobile ? "object-contain" : ""}
          />
          <div
            className={` ${heroSection.bgColor} flex flex-row max-sm:flex-col w-full justify-between py-4 px-10 gap-4 max-sm:px-0 max-sm:py-10  `}
          >
            <div className="w-44 text-white max-sm:px-4  ">
              <h1 className=" font-semibold text-2xl ">Explora</h1>
              <h2 className="font-extrabold text-lg">este ambiente</h2>
              <a className=" underline text-sm">Ver todo</a>
            </div>
            <Carousel className="w-2/3 max-sm:w-auto flex items-end  justify-end">
              <CarouselContent className="flex flex-row gap-2">
                {heroSection.productos.map((producto) => (
                  <CarouselItem
                    key={producto.id}
                    className="md:basis-56 lg:basis-48 sm:basis-44 max-sm:basis-44 bg-white  flex flex-col items-center justify-center px-1 pt-1 pb-4  "
                  >
                    <Image
                      src={producto.image}
                      alt={`Producto ${producto.name}`}
                      width={500}
                      height={500}
                      className="h-40 w-48 object-contain  "
                    />
                    <div className="w-44 text-center">
                      <h1
                        className={`text-xl font-extrabold ${
                          producto.discount ? "text-red-500 " : "text-black"
                        }`}
                      >
                        Q{formatPriceWithParts(producto.price).integer}
                        <span className="text-base align-top">
                          {formatPriceWithParts(producto.price).decimal}
                        </span>
                        {producto.discount > 0 && (
                          <span className=" ml-2">({producto.discount}%)</span>
                        )}
                      </h1>

                      {producto.regularPrice > 0 && (
                        <span className="text-gray-950 text-base  ">
                          Reg: Q{" "}
                          {formatPriceWithParts(producto.regularPrice).integer}
                          <span className="text-[10px] align-top">
                            {
                              formatPriceWithParts(producto.regularPrice)
                                .decimal
                            }
                          </span>
                        </span>
                      )}

                      <h1 className="max-sm:hidden">
                        {producto.quantityOffer > 0 && (
                          <span className="text-red-500 font-semibold text-base ">
                            Lleva {producto.quantityOffer} por Q{" "}
                            {
                              formatPriceWithParts(producto.uniquePriceOffer)
                                .integer
                            }
                            <span className="text-[10px] align-top">
                              {
                                formatPriceWithParts(producto.uniquePriceOffer)
                                  .decimal
                              }
                            </span>{" "}
                            c/u
                          </span>
                        )}
                      </h1>
                      <h3 className=" font-extrabold text-sm  px-4 line-clamp-2 ">
                        {producto.name}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="max-sm:hidden">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SectionComponent;
