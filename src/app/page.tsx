import Navbar from "@/components/Navbar"; // <--- Importe o novo componente
import HeroSection from "@/components/HeroSection";
import SobreEvento from "@/components/SobreEvento";
import Cronograma from "@/components/Cronograma";
import VitrineProjetos from "@/components/VitrineProjetos";
import { Apoiadores, Galeria } from "@/components/Extras";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* O Menu fica aqui no topo */}
      <Navbar />
      
      <HeroSection />
      <Apoiadores />
      <SobreEvento />
      <Cronograma />
      <VitrineProjetos />
      <Galeria />
    </main>
  );
}