import { Rocket, BookOpen, Lightbulb, Calendar } from "lucide-react";

export default function SobreEvento() {
  return (
    <section className="py-20 bg-white overflow-hidden" id="sobre">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LADO ESQUERDO: TEXTO */}
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">
              Sobre a MINFO
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              A{" "}
              <strong>
                Mostra de Informática do IFPI - Campus Picos (MINFO)
              </strong>{" "}
              é a apresentação dos projetos desenvolvidos pelos estudantes da
              disciplina <strong>Projeto Integrador</strong> do Ensino Médio
              Integrado em Informática e do curso superior em Análise e
              Desenvolvimento de Sistemas.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              É um instrumento de integração entre{" "}
              <strong>ensino, pesquisa e extensão</strong>, proporcionando uma
              relação direta entre os diversos saberes das áreas do conhecimento
              que compõem o curso e o fazer prático/real, atuando na solução de
              problemas da comunidade em que o curso está inserido.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 w-full max-w-4xl mx-auto">
              {/* --- BOTÃO 1: VOTAÇÃO (Indigo/Roxo) --- */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeq6jl5mznwZCPX60f6AsxNYvZK9AgfR0n8fHjHUBCqgUGscg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full transform transition-all duration-300 hover:-translate-y-1"
              >
                {/* Efeito de brilho atrás */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-30 group-hover:opacity-100 blur transition duration-500"></div>

                <div className="relative flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="flex-shrink-0 bg-indigo-50 p-4 rounded-full group-hover:bg-indigo-600 transition-colors duration-300">
                    <Rocket
                      className="text-indigo-600 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
                      size={28}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg leading-tight">
                      Votação Popular
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 font-medium group-hover:text-indigo-600 transition-colors">
                      Escolha o melhor aplicativo ➔
                    </p>
                  </div>
                </div>
              </a>

              {/* --- BOTÃO 2: OUTRA AÇÃO (Exemplo: Verde/Esmeralda) --- */}
              {/* Se for o mesmo link, é só copiar o href de cima. Se for outro, troca aí. */}
              <a
                href="https://docs.google.com/document/d/14czzFqpcq1BGQfYcTWml1KtPtnffOk5B/edit?rtpof=true&sd=true"
                className="group relative block w-full transform transition-all duration-300 hover:-translate-y-1"
              >
                {/* Brilho Verde */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl opacity-30 group-hover:opacity-100 blur transition duration-500"></div>

                <div className="relative flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="flex-shrink-0 bg-emerald-50 p-4 rounded-full group-hover:bg-emerald-600 transition-colors duration-300">
                    <Calendar
                      className="text-emerald-600 group-hover:text-white transition-all duration-300"
                      size={28}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg leading-tight">
                      Cronograma das apresentações
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 font-medium group-hover:text-emerald-600 transition-colors">
                      Veja aqui ➔
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* LADO DIREITO: LOGO DA MINFO (LIMPA) */}
          <div className="relative mt-12 md:mt-0 group flex justify-center">
            {/* Elemento Decorativo de Fundo (Luz azul atrás) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>

            {/* Container da Logo */}
            <div className="relative w-full max-w-sm">
              <img
                src="/logos/minfo-preto-logo.png"
                alt="Logo MINFO 5ª Edição"
                className="w-full h-auto object-contain rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
              />
              {/* Removi a etiqueta flutuante daqui */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
