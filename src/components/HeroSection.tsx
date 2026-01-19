import { Calendar, MapPin, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-black text-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge do Evento Pai */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          Evento integrante do I Congresso de Empreendedorismo & Inovação
        </div>

        {/* LOGO DA MINFO */}
        {/* <img src="/logos/minfo-branco.png" alt="Logo MINFO" className="h-24 mx-auto mb-6" /> */}

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          5ª Edição da <span className="text-blue-400">MINFO</span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Mostra de Informática do IFPI Campus Picos. Onde o conhecimento
          acadêmico se transforma em soluções reais.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 text-sm md:text-base">
          <div className="flex items-center justify-center gap-2 bg-white/5 px-6 py-3 rounded-lg border border-white/10">
            <Calendar className="text-blue-400" size={20} />
            <div className="text-left">
              <p className="font-bold text-white">19 a 21 de Janeiro</p>
              <p className="text-gray-400 text-xs">
                Manhã (09h) e Tarde (14h)
              </p>{" "}
              {/* CORRIGIDO AQUI */}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/5 px-6 py-3 rounded-lg border border-white/10">
            <MapPin className="text-blue-400" size={20} />
            <div className="text-left">
              <p className="font-bold text-white">IFPI Campus Picos</p>
              <p className="text-gray-400 text-xs">Auditório & Pátio Central</p>
            </div>
          </div>
        </div>

        <a
          href="https://suap.ifpi.edu.br/eventos/inscricao/1/3390/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-900/50"
        >
          Inscrever-se
          <ExternalLink size={20} />
        </a>
      </div>
    </section>
  );
}
