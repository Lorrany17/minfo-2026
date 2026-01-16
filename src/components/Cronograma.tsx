"use client";
import { Clock, CalendarCheck, MapPin } from 'lucide-react';

const agenda = [
  {
    dia: "19/01",
    semana: "Segunda-feira",
    horario: "14:40 às 17:30",
    titulo: "Fase de Ideação (1º Ano e ADS)",
    local: "Auditório",
    desc: "Abertura com pitchs iniciais das turmas de 1º Ano (Técnico) e 3º Bloco (Superior)."
  },
  {
    dia: "20/01",
    semana: "Terça (Manhã)",
    horario: "09:20 às 12:00",
    titulo: "Apresentação de MVPs (3º Ano)",
    local: "Auditório",
    desc: "Startups em fase de MVP (Produto Mínimo Viável) e validação de mercado."
  },
  {
    dia: "20/01",
    semana: "Terça (Tarde)",
    horario: "13:40 às 17:30",
    titulo: "Protótipos e Soluções (2º Ano e ADS)",
    local: "Auditório",
    desc: "Maratona de apresentações de protótipos funcionais das turmas de 2º Ano e 4º Bloco."
  },
  {
    dia: "21/01",
    semana: "Quarta-feira",
    horario: "14:40 às 17:10",
    titulo: "Ideação Final e Encerramento",
    local: "Auditório",
    desc: "Última rodada de apresentações da fase de ideação e encerramento da 5ª MINFO."
  }
];

export default function Cronograma() {
  return (
    <section className="py-20 bg-gray-50" id="agenda">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Programação da Mostra</h2>
          <p className="text-gray-600 mt-2">Confira os horários das apresentações por dia.</p>
        </div>

        <div className="grid gap-5">
          {agenda.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-stretch gap-6 hover:border-blue-300 transition-all hover:shadow-md group">
              
              {/* Coluna da Data */}
              <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex flex-col justify-center items-center text-center md:w-40 shrink-0 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                <CalendarCheck size={28} className="mb-2 text-blue-600 opacity-80" />
                <span className="block font-black text-xl leading-none mb-1">{item.dia}</span>
                <span className="block text-xs font-bold uppercase tracking-wide text-blue-600">{item.semana}</span>
              </div>
              
              {/* Coluna do Conteúdo */}
              <div className="flex-1 flex flex-col justify-center text-center md:text-left py-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{item.titulo}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.desc}</p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-auto pt-2 border-t border-gray-50">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    <Clock size={14}/> {item.horario}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin size={14}/> {item.local}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}