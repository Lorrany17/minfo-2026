"use client";
import { Clock, CalendarCheck, MapPin } from "lucide-react";

const agenda = [
  {
    dia: "19/01",
    semana: "Segunda (Manhã)",
    horario: "08:00 às 12:20",
    titulo: "Abertura e Palestras",
    local: "Auditório",
    desc: "Abertura oficial, Palestra 'Do Problema Real a Solução Digital' (Heygler de Paula) e Competição de Pitch.",
  },
  {
    dia: "19/01",
    semana: "Segunda (Tarde)",
    horario: "14:40 às 18:00",
    titulo: "Apresentações MINFO",
    local: "Auditório",
    desc: "Apresentações de trabalhos do MINFO com o Prof. Jader Abreu.",
  },
  {
    dia: "19/01",
    semana: "Segunda (Noite)",
    horario: "19:00 às 22:00",
    titulo: "Palestras e Mesa Redonda",
    local: "Auditório",
    desc: "Palestra 'Sentimentos em Dados' e Mesa Redonda com cases de sucesso.",
  },
  {
    dia: "20/01",
    semana: "Terça (Manhã)",
    horario: "08:00 às 12:00",
    titulo: "Startups e MINFO",
    local: "Auditório",
    desc: "Palestra 'Startups: Cases de sucesso' e apresentações de trabalhos do MINFO.",
  },
  {
    dia: "20/01",
    semana: "Terça (Tarde)",
    horario: "14:40 às 18:00",
    titulo: "MINFO",
    local: "Auditório",
    desc: "Sessão vespertina de apresentações de trabalhos do MINFO.",
  },
  {
    dia: "20/01",
    semana: "Terça (Noite)",
    horario: "19:00 às 21:00",
    titulo: "Fábrica de Startups",
    local: "Auditório",
    desc: "Palestra 'Um processo para Fábrica de Startups' com Aislan Rafael (IFPI Teresina).",
  },
  {
    dia: "21/01",
    semana: "Quarta (Manhã)",
    horario: "08:00 às 12:20",
    titulo: "Hackathon e Social",
    local: "Auditório/Pátio",
    desc: "Palestra 'Empreendedorismo Social' (Prof. Heleonardo) e I Hackathon do IFPI Campus Picos.",
  },
  {
    dia: "21/01",
    semana: "Quarta (Tarde)",
    horario: "15:40 às 17:40",
    titulo: "MINFO",
    local: "Auditório",
    desc: "Última rodada de apresentações de trabalhos do MINFO.",
  },
  {
    dia: "21/01",
    semana: "Quarta (Noite)",
    horario: "19:00 às 21:30",
    titulo: "Mercado Fitness",
    local: "Auditório",
    desc: "Palestra 'Empreendendo e inovando no mercado Fitness' com Yves Batista (CEO Fisioform).",
  },
  {
    dia: "22/01",
    semana: "Quinta (Manhã)",
    horario: "08:00 às 12:20",
    titulo: "Arena e Encerramento",
    local: "Auditório",
    desc: "Arena de Recrutamento ( VirteX, Oxente Pizzaria e Hamburgão do Beto) e premiações finais do evento.",
  },
];

export default function Cronograma() {
  return (
    <section className="py-20 bg-gray-50" id="agenda">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Programação da Mostra
          </h2>
          <p className="text-gray-600 mt-2">
            Confira os horários das apresentações por dia.
          </p>
        </div>

        <div className="grid gap-5">
          {agenda.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-stretch gap-6 hover:border-blue-300 transition-all hover:shadow-md group"
            >
              {/* Coluna da Data */}
              <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex flex-col justify-center items-center text-center md:w-40 shrink-0 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                <CalendarCheck
                  size={28}
                  className="mb-2 text-blue-600 opacity-80"
                />
                <span className="block font-black text-xl leading-none mb-1">
                  {item.dia}
                </span>
                <span className="block text-xs font-bold uppercase tracking-wide text-blue-600">
                  {item.semana}
                </span>
              </div>

              {/* Coluna do Conteúdo */}
              <div className="flex-1 flex flex-col justify-center text-center md:text-left py-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  {item.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-auto pt-2 border-t border-gray-50">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    <Clock size={14} /> {item.horario}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin size={14} /> {item.local}
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
