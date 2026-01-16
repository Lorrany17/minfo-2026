import { Rocket, BookOpen } from 'lucide-react';

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
              A <strong>Mostra de Informática do IFPI - Campus Picos (MINFO)</strong> é a apresentação dos projetos desenvolvidos pelos estudantes da disciplina <strong>Projeto Integrador</strong> do Ensino Médio Integrado em Informática e do curso superior em Análise e Desenvolvimento de Sistemas.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-justify">
              É um instrumento de integração entre <strong>ensino, pesquisa e extensão</strong>, proporcionando uma relação direta entre os diversos saberes das áreas do conhecimento que compõem o curso e o fazer prático/real, atuando na solução de problemas da comunidade em que o curso está inserido.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                <BookOpen className="text-blue-600 mb-2" size={24} />
                <h4 className="font-bold text-gray-900">Integração</h4>
                <p className="text-sm text-gray-500">Ensino Médio e Superior unidos.</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 hover:shadow-md transition-shadow">
                <Rocket className="text-indigo-600 mb-2" size={24} />
                <h4 className="font-bold text-gray-900">Prática Real</h4>
                <p className="text-sm text-gray-500">Soluções para a comunidade.</p>
              </div>
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