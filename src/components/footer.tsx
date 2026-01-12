
import {
  beforeFooterInfo,
  blueFooterInfo,
  footerInfo,
} from "../utils/staticData";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CardsContainer,
  FooterLinks,
  SocialMedia,
  SubscribeSection,
} from "../utils/MapInfo";

const Footer = () => {
  return (
    <footer className=" flex items-center flex-col py-2 w-full  ">
      <div className=" text-center w-full flex flex-col max-sm:gap-4   ">
        {/*Cards before footer */}
        <>
          <div className="font-bold text-2xl max-sm:text-lg">
            Tu felicidad, garantizada
            <h1 className="text-gray-500 font-extralight text-lg max-sm:text-sm">
              Si no estás 100% satisfecho con tu compra,{" "}
              <br className="sm:hidden" />
              <span className="text-gray-500 font-extrabold">
                contáctanos y lo resolvemos
              </span>
            </h1>
          </div>
        </>

        {/* Desktop - grid sin scroll */}
        <CardsContainer />
        {/* Mobile - carousel */}
        <Carousel className="sm:hidden px-2  ">
          <CarouselContent className="mb-1">
            {beforeFooterInfo.map((cards) => (
              <CarouselItem key={cards.id} className="basis-72  ">
                <div className="flex flex-row gap-2 items-center h-full border-2 border-gray-200 rounded-2xl px-4 py-2 ">
                  <Image
                    src={cards.image}
                    alt="Logo de{cards.title}"
                    width={100}
                    height={100}
                    className="p-1 w-12"
                  />
                  <h1 className="text-xs text-gray-500 font-semibold">
                    {cards.title}
                  </h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex flex-col items-start w-full sm:hidden max-sm:px-8 bg-gray-100 ">
          <h1 className="text-start font-extrabold">
            Suscríbete <br />
          </h1>{" "}
          <span>Recibe ofertas, beneficios y noticias</span>
          <div className="flex flex-row w-full justify-between gap-2 ">
            <SubscribeSection />
          </div>
        </div>

        {/*Contact info */}
        <div className="bg-[#101e8d] w-full flex flex-row  max-lg:flex-col max-lg:items-start max-lg:px-6 max-lg:gap-4 max-lg:py-3 px-8   items-center justify-between text-white py-2 mt-4 ">
          {blueFooterInfo.map((contact) => (
            <span
              key={contact.id}
              className="flex flex-row gap-2 items-center justify-center  max-sm:text-start max-sm:gap-4"
            >
              <Image
                src={contact.image}
                alt="Logo de{contact.title}"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
              <h1 className="font-semibold text-lg">{contact.title}</h1>
            </span>
          ))}{" "}
          <span className="font-semibold text-lg lg:hidden cursor-pointer hover:underline">
            Descargar aplicación
          </span>
        </div>

        {/*Footer info */}
        <div className="flex flex-row max-lg:flex-col w-full justify-between  px-8  bg-gray-100 py-6  ">
          {/* Desktop version - sin accordion */}
          <FooterLinks />
          {/* Mobile version - con accordion */}
          <Accordion
            type="single"
            collapsible
            className="flex flex-col lg:hidden gap-2"
          >
            {footerInfo.map((general) => (
              <AccordionItem
                value={general.title}
                key={general.id}
                className="flex flex-col items-stretch"
              >
                <AccordionTrigger className="font-extrabold pb-2">
                  {general.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-start">
                  {general.links.map((routes) => (
                    <h1
                      key={routes.id}
                      className="hover:underline cursor-pointer font-light"
                    >
                      {routes.name}
                    </h1>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/*Feedback */}
          <div
            className="flex flex-col gap-2 max-sm:items-center max-sm:justify-center
             max-sm:gap-4 "
          >
            <Image
              src="/feedback.webp"
              alt="Opiniones certificadas"
              width={100}
              height={100}
              className="w-30 h-30 sm:hidden "
            />
            <div className="flex flex-row gap-2 w-full items-start justify-between ">
              <div className="flex flex-row gap-2">
                <Image
                  src="/empresaCertificadaNew.png"
                  alt="Empresa Certificada"
                  width={100}
                  height={100}
                  className="w-auto h-24"
                />
                <div className="flex flex-col gap-2 items-start ">
                  <h1 className="text-center font-semibold">
                    Somos una Empresa B
                  </h1>
                  <span className="w-44 max-sm:w-auto text-xs text-start">
                    Estamos orgullosos de ser reconocidos por los más altos
                    estándares de sostenibilidad social y ambiental.
                  </span>
                  <span className="font-extrabold underline cursor-pointer text-sm">
                    Conoce más
                  </span>
                </div>{" "}
              </div>

              <Image
                src="/feedback.webp"
                alt="Opiniones certificadas"
                width={100}
                height={100}
                className="w-auto h-30 max-sm:hidden "
              />
            </div>
            <div className="flex flex-row gap-2 w-full justify-start ">
              <SocialMedia />
            </div>

            <div className="flex flex-col items-start w-full max-sm:hidden ">
              <h1 className="text-start font-extrabold">
                Suscríbete <br />
              </h1>{" "}
              <span>Recibe ofertas, beneficios y noticias</span>
              <div className="flex flex-row w-full justify-between gap-2 ">
                <SubscribeSection />
              </div>
            </div>
          </div>
        </div>

        {/**Social media */}
        <div className="flex flex-row max-sm:flex-col w-full items-center justify-between px-8 py-2">
          <div className="flex flex-row w-full justify-start gap-8 underline text-sm max-sm:w-auto">
            <h1 className="">Privacidad</h1>
            <h1 className="">Términos y condiciones</h1>
          </div>
          <div className="flex flex-row gap-2 w-full justify-end max-sm:hidden">
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
