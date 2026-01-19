"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Users,
  ExternalLink,
  X,
  AlertCircle,
  Loader2,
  Rocket,
  Lightbulb,
  Zap,
} from "lucide-react";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQU3WG_fstQikyfy-FTQYp94lHqNlRRbBQYco6owLp116HZ8n12GwNadapCuQcnr7VaKZCw8zH_pIX7/pub?output=csv";

export default function VitrineProjetos() {
  const [projetos, setProjetos] = useState<any[]>([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");
  const [projetoSelecionado, setProjetoSelecionado] = useState<any>(null);

  // --- Função para limpar texto (remove aspas e espaços extras) ---
  const clean = (text: string) =>
    text ? text.replace(/^"|"$/g, "").trim() : "";

  // --- Parser Manual (Caractere por caractere para precisão) ---
  const csvLineToArray = (text: string) => {
    const result = [];
    let curVal = "";
    let inQuote = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (inQuote) {
        if (char === '"') {
          if (i + 1 < text.length && text[i + 1] === '"') {
            curVal += '"';
            i++;
          } else {
            inQuote = false;
          }
        } else {
          curVal += char;
        }
      } else {
        if (char === '"') {
          inQuote = true;
        } else if (char === ",") {
          result.push(curVal.trim());
          curVal = "";
        } else if (char !== "\r") {
          curVal += char;
        }
      }
    }
    result.push(curVal.trim());
    return result;
  };

  const parseCSV = (texto: string) => {
    const linhas = texto.split("\n");
    if (linhas.length < 2) return [];

    // 1. Identifica os Cabeçalhos
    const headers = csvLineToArray(linhas[0]).map((h) => h.toLowerCase());
    const headersOriginais = csvLineToArray(linhas[0]); // Para usar nos rótulos dos links

    // 2. Mapeamento Inteligente das Colunas
    const map = {
      nome: headers.findIndex(
        (h) =>
          (h.includes("nome") ||
            h.includes("projeto")),
      ),
      equipe: headers.findIndex(
        (h) =>
          h.includes("startup") ||
          h.includes("time") ||
          h.includes("integrantes") ||
          h.includes("grupo"),
      ),
      ceo: headers.findIndex(
        (h) =>
          h.includes("ceo") || h.includes("lider") || h.includes("responsável"),
      ),
      descricao: headers.findIndex(
        (h) =>
          h.includes("descri") || h.includes("sobre") || h.includes("resumo"),
      ),
      categoria: headers.findIndex(
        (h) =>
          h.includes("categoria") ||
          h.includes("area") ||
          h.includes("segmento"),
      ),
      fase: headers.findIndex(
        (h) =>
          h.includes("fase") || h.includes("status") || h.includes("estágio"),
      ),
    };

    // Fallbacks (Se não achar, chuta as posições mais comuns)
    if (map.nome === -1) map.nome = 0;
    if (map.equipe === -1) map.equipe = 1;
    if (map.descricao === -1) map.descricao = 2;

    return linhas
      .slice(1)
      .map((linha) => {
        if (!linha.trim()) return null;

        const colunas = csvLineToArray(linha);
        const nomeBruto = colunas[map.nome] ? clean(colunas[map.nome]) : "";

        // --- FILTRO ANTI-LIXO ---
        // Ignora linhas que parecem totais, dinheiro ou cabeçalhos repetidos
        if (
          !nomeBruto ||
          nomeBruto.startsWith("R$") ||
          nomeBruto.toLowerCase().includes("total") ||
          nomeBruto.length < 2
        ) {
          return null;
        }

        // Monta o objeto do projeto
        const projeto: any = {
          nome: nomeBruto,
          equipe:
            map.equipe !== -1
              ? clean(colunas[map.equipe])
              : "Equipe não informada",
          ceo: map.ceo !== -1 ? clean(colunas[map.ceo]) : "", // Pega o CEO separado
          descricao: map.descricao !== -1 ? clean(colunas[map.descricao]) : "",
          categoria:
            map.categoria !== -1 ? clean(colunas[map.categoria]) : "Startup",
          fase: map.fase !== -1 ? clean(colunas[map.fase]) : "Ativo",
          links: [],
        };

        // Se não achou coluna de CEO específica, usa a Equipe como fallback no modal
        if (!projeto.ceo && projeto.equipe) {
          projeto.ceo = projeto.equipe;
        }

        // Correção de troca Nome/Descrição (Segurança)
        if (projeto.nome.length > 80 && projeto.descricao.length < 20) {
          const temp = projeto.nome;
          projeto.nome = projeto.descricao || "Nome não identificado";
          projeto.descricao = temp;
        }

        // Extrai os Links
        colunas.forEach((valor, index) => {
          // Ignora as colunas que já usamos
          if (!Object.values(map).includes(index)) {
            const v = clean(valor);
            if (v.startsWith("http") || v.startsWith("www")) {
              projeto.links.push({
                label: headersOriginais[index] || "Link",
                url: v,
              });
            }
          }
        });

        return projeto;
      })
      .filter((p) => p !== null);
  };

  useEffect(() => {
    fetch(CSV_URL)
      .then((r) => r.text())
      .then((t) => {
        try {
          const dados = parseCSV(t);
          dados.sort((a, b) => a.nome.localeCompare(b.nome));
          setProjetos(dados);
          setLoading(false);
        } catch (e) {
          setErro("Erro ao ler dados.");
          setLoading(false);
        }
      })
      .catch(() => {
        setErro("Erro de conexão.");
        setLoading(false);
      });
  }, []);

  const projetosFiltrados = projetos.filter((p) => {
    const termo = busca.toLowerCase();
    return (
      p.nome.toLowerCase().includes(termo) ||
      p.equipe.toLowerCase().includes(termo) ||
      p.ceo.toLowerCase().includes(termo)
    );
  });

  // Função para estilizar a tag de fase
  const getFaseStyle = (fase: string) => {
    const f = fase.toLowerCase();
    if (f.includes("tração") || f.includes("tracao"))
      return "bg-purple-100 text-purple-700 border-purple-200";
    if (f.includes("mvp") || f.includes("validação"))
      return "bg-blue-100 text-blue-700 border-blue-200";
    if (f.includes("ideação"))
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    return "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getFaseIcon = (fase: string) => {
    const f = fase.toLowerCase();
    if (f.includes("tração")) return <Rocket size={10} />;
    if (f.includes("mvp")) return <Zap size={10} />;
    return <Lightbulb size={10} />;
  };

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vitrine de Startups
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções inovadoras do IFPI Campus Picos.
          </p>
        </div>

        {/* Busca */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar startup, equipe, CEO..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all shadow-sm"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>

        {loading && (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-blue-600 h-10 w-10" />
            <span className="ml-3 text-gray-600">Carregando vitrine...</span>
          </div>
        )}

        {erro && (
          <div className="text-center text-red-500 py-10 flex flex-col items-center">
            <AlertCircle size={32} className="mb-2" />
            <p>{erro}</p>
          </div>
        )}

        {/* Grid de Cards (Design Idêntico à imagem) */}
        {!loading && !erro && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projetosFiltrados.length > 0 ? (
              projetosFiltrados.map((projeto, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group"
                >
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Header do Card (Tags) */}
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                        {projeto.categoria}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded border flex items-center gap-1 ${getFaseStyle(projeto.fase)}`}
                      >
                        {getFaseIcon(projeto.fase)}
                        {projeto.fase}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {projeto.nome}
                    </h3>

                    {/* Descrição */}
                    <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1">
                      {projeto.descricao || "Descrição indisponível."}
                    </p>

                    {/* Footer do Card */}
                    <div className="pt-4 border-t border-gray-50 mt-auto">
                      {/* AQUI: Mostra EQUIPE no card, como pedido */}
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-3">
                        <Users size={14} className="text-gray-400" />
                        <span className="truncate">{projeto.equipe || "Equipe não informada"}</span>
                      </div>

                      {/* Botão Ver Detalhes */}
                      <button
                        onClick={() => setProjetoSelecionado(projeto)}
                        className="w-full py-2 bg-white border border-gray-200 hover:border-blue-500 hover:text-blue-600 text-gray-600 text-sm font-medium rounded-lg transition-all"
                      >
                        Ver detalhes
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                Nenhum projeto encontrado.
              </div>
            )}
          </div>
        )}
      </div>

      {/* MODAL / BANDEJA */}
      {projetoSelecionado && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setProjetoSelecionado(null)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {projetoSelecionado.nome}
                </h3>
                {/* AQUI: Mostra CEO no modal, como pedido */}
                <p className="text-sm text-gray-600 flex items-center gap-1 mt-1 font-medium">
                  <Users size={14} className="text-blue-600" />
                  CEO: {projetoSelecionado.ceo || "Não informado"}
                </p>
              </div>
              <button
                onClick={() => setProjetoSelecionado(null)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            {/* Conteúdo Modal */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Sobre o Projeto
              </h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                {projetoSelecionado.descricao}
              </p>

              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Links & Acessos
              </h4>
              <div className="flex flex-wrap gap-2">
                {projetoSelecionado.links.length > 0 ? (
                  projetoSelecionado.links.map((link: any, i: number) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium border border-blue-200"
                    >
                      <ExternalLink size={14} />
                      {link.label}
                    </a>
                  ))
                ) : (
                  <span className="text-sm text-gray-400 italic">
                    Nenhum link cadastrado na planilha.
                  </span>
                )}
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button
                onClick={() => setProjetoSelecionado(null)}
                className="px-5 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
