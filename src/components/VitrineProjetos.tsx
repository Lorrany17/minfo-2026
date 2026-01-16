"use client";
import { useState } from 'react';
import { Search, MapPin, Users, CheckCircle, AlertCircle, Rocket, Lightbulb } from 'lucide-react';

// Dados extraídos da planilha real "Acompanhamento de Todas as startups do IFPI"
const projetosData = [
  // --- Projetos Avançados (ADS/Superior) ---
  {
    id: 1,
    nome: "BeeCerrado",
    equipe: "CEO: Aislan Rafael",
    categoria: "Agrotech",
    status: "Ativo",
    descricao: "Marketplace focado em conectar produtores de mel do cerrado diretamente aos consumidores.",
    fase: "Tração"
  },
  {
    id: 2,
    nome: "TikTests",
    equipe: "CEO: Aislan Rafael",
    categoria: "Moda",
    status: "Ativo",
    descricao: "Tecnologia para Moda e Personalização.",
    fase: "Tração"
  },
  {
    id: 3,
    nome: "Conexão Mel",
    equipe: "CEO: Emileny",
    categoria: "Agrotech",
    status: "Ativo",
    descricao: "Marketplace para conectar pequenos produtores de mel a consumidores que preferem um mel autêntico.",
    fase: "MVP"
  },
  {
    id: 4,
    nome: "Eagles Software",
    equipe: "CEO: João Victor",
    categoria: "Gestão",
    status: "Ativo",
    descricao: "Software para cadastro e gerenciamento de achados e perdidos para instituições e empresas.",
    fase: "Validação"
  },
  {
    id: 5,
    nome: "ProConnect",
    equipe: "CEO: Êmylle",
    categoria: "Serviços",
    status: "Ativo",
    descricao: "Plataforma que conecta profissionais autônomos a clientes que buscam serviços com confiança e agilidade.",
    fase: "Validação"
  },
  {
    id: 6,
    nome: "Tech Mel",
    equipe: "CEO: Larissa",
    categoria: "Agrotech",
    status: "Ativo",
    descricao: "Startup que propõe através da tecnologia diminuir a morte de abelhas e otimizar a produção.",
    fase: "Validação"
  },
  {
    id: 7,
    nome: "EasyCart",
    equipe: "CEO: Matheus",
    categoria: "E-commerce",
    status: "Ativo",
    descricao: "Plataforma de catálogos digitais para pequenos vendedores organizarem e exporem seus produtos.",
    fase: "Ativo"
  },
  {
    id: 8,
    nome: "Agende Aí",
    equipe: "CEO: Carlos Michael",
    categoria: "Alimentação",
    status: "Ativo",
    descricao: "Um 'ifood' focado em agendamentos para o setor alimentício de pequena escala.",
    fase: "Ativo"
  },
  {
    id: 9,
    nome: "Educaju",
    equipe: "CEO: Luis Henrique",
    categoria: "Educação",
    status: "Ativo",
    descricao: "Plataforma educacional em fase de ideação focada no ensino e aprendizagem.",
    fase: "Ideação"
  },
  {
    id: 10,
    nome: "Crohnease",
    equipe: "CEO: João Pedro",
    categoria: "Saúde",
    status: "Ativo",
    descricao: "Solução tecnológica voltada para o monitoramento e auxílio na saúde (Doença de Crohn).",
    fase: "Ativo"
  },
  {
    id: 11,
    nome: "Energia Sustentável",
    equipe: "CEO: Renan",
    categoria: "Energia",
    status: "Ativo",
    descricao: "Tecnologia voltada para o setor de Energias Renováveis.",
    fase: "Ativo"
  },

  // --- Projetos do Técnico (Fase Beta/Protótipo) ---
  {
    id: 12,
    nome: "Focus In Beauty",
    equipe: "App: Pretty Nails",
    categoria: "Beleza",
    status: "Ativo",
    descricao: "Solução para agendamento e gestão na área de beleza e estética.",
    fase: "BETA"
  },
  {
    id: 13,
    nome: "StudyTech",
    equipe: "App: Redator Pró",
    categoria: "Educação",
    status: "Ativo",
    descricao: "Ferramenta para auxiliar estudantes na produção e correção de redações.",
    fase: "BETA"
  },
  {
    id: 14,
    nome: "Pet Amigo",
    equipe: "IFPI Técnico",
    categoria: "Pets",
    status: "Ativo",
    descricao: "Aplicativo voltado para o cuidado e serviços para animais de estimação.",
    fase: "BETA"
  },
  {
    id: 15,
    nome: "CVI Commerce",
    equipe: "CEO: Évelyn",
    categoria: "Varejo",
    status: "Ativo",
    descricao: "Solução comercial para o setor de auto peças e varejo.",
    fase: "Protótipo"
  },
  {
    id: 16,
    nome: "Tasklyzer",
    equipe: "CEO: Brenda",
    categoria: "Produtividade",
    status: "Ativo",
    descricao: "App 'Automatic Correction' para otimização de tarefas e correção automatizada.",
    fase: "Protótipo"
  },
  {
    id: 17,
    nome: "TechSmart",
    equipe: "CEO: Leonara",
    categoria: "Tecnologia",
    status: "Ativo",
    descricao: "App 'Feedsmart' focado em soluções inteligentes de feedback e comunicação.",
    fase: "Protótipo"
  },
  {
    id: 18,
    nome: "HRWORK",
    equipe: "CEO: Rayane Santos",
    categoria: "RH",
    status: "Ativo",
    descricao: "Resource Systems: Sistema voltado para a gestão de Recursos Humanos.",
    fase: "Protótipo"
  }
];

const categorias = ["Todos", "Agrotech", "Saúde", "Educação", "E-commerce", "Gestão", "Serviços", "Moda", "Beleza", "Pets"];

export default function VitrineProjetos() {
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const projetosFiltrados = projetosData.filter((projeto) => {
    const termo = busca.toLowerCase();
    const matchTexto = 
      projeto.nome.toLowerCase().includes(termo) || 
      projeto.descricao.toLowerCase().includes(termo) ||
      projeto.equipe.toLowerCase().includes(termo);
      
    const matchCategoria = categoriaAtiva === 'Todos' || projeto.categoria === categoriaAtiva;

    return matchTexto && matchCategoria;
  });

  // Função auxiliar para cor da fase
  const getFaseColor = (fase: string) => {
    if (fase === 'Tração' || fase === 'Validação') return 'bg-purple-100 text-purple-700 border-purple-200';
    if (fase === 'MVP') return 'bg-blue-100 text-blue-700 border-blue-200';
    if (fase === 'BETA') return 'bg-orange-100 text-orange-700 border-orange-200';
    return 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <section className="py-16 px-4 bg-gray-50" id="projetos">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vitrine de Startups
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça as soluções inovadoras desenvolvidas no IFPI Campus Picos, 
            desde a fase de ideação até startups em tração.
          </p>
        </div>

        {/* Barra de Busca e Filtros */}
        <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-between">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Buscar startup, CEO ou área..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar scroll-smooth">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors border
                  ${categoriaAtiva === cat 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projetosFiltrados.length > 0 ? (
            projetosFiltrados.map((projeto) => (
              <div key={projeto.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group">
                
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                      {projeto.categoria}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border flex items-center gap-1 ${getFaseColor(projeto.fase)}`}>
                      {projeto.fase === 'Tração' ? <Rocket size={10} /> : <Lightbulb size={10} />}
                      {projeto.fase}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {projeto.nome}
                  </h3>
                  
                  <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1">
                    {projeto.descricao}
                  </p>

                  <div className="pt-4 border-t border-gray-50 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                      <Users size={14} className="text-gray-400" />
                      <span className="truncate">{projeto.equipe}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <p className="text-gray-500">Nenhum projeto encontrado para essa busca.</p>
              <button 
                onClick={() => {setBusca(''); setCategoriaAtiva('Todos');}}
                className="mt-2 text-blue-600 hover:underline font-medium text-sm"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}