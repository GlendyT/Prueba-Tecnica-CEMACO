import Header from "../components/header";
import Footer from "../components/footer";
import {
  AuroraCosmica,
  BosqueMagico,
  ChispasDeDulzura,
  GalaFloral,
  HistoriasDeNavidad,
} from "../utils/staticData";
import SectionComponent from "../components/SectionComponent";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <Header />
      <div className="flex gap-4 max-sm:gap-2 flex-col w-full  justify-center   ">
        <SectionComponent heroSections={HistoriasDeNavidad} />
        <SectionComponent heroSections={GalaFloral} />
        <SectionComponent heroSections={BosqueMagico} />
        <SectionComponent heroSections={ChispasDeDulzura} />
        <SectionComponent heroSections={AuroraCosmica} />
      </div>
      <Footer />
    </section>
  );
}
