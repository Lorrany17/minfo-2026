"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const links = [
    { nome: "Início", href: "#" },
    { nome: "Sobre", href: "#sobre" },
    { nome: "Agenda", href: "#agenda" },
    { nome: "Projetos", href: "#projetos" },
    { nome: "Galeria", href: "#galeria" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          {/* LOGO CLICÁVEL */}
          <div className="flex items-center relative z-50 h-full py-2">
            <Link href="/" className="h-full flex items-center">
              <img
                src="/logos/minfo-logo.png"
                alt="Logo MINFO"
                className="h-full w-auto object-contain scale-[2.0] origin-left ml-6 transition-transform hover:scale-[2.1] translate-y-2"
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.nome}
                href={link.href}
                className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.nome}
              </a>
            ))}
            <a
              href="https://suap.ifpi.edu.br/eventos/inscricao/1/3390/"
              target="_blank"
              className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105"
            >
              Inscrever-se
            </a>
          </nav>

          {/* BOTÃO MOBILE */}
          <button
            className="md:hidden p-2 text-blue-900 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden animate-in fade-in duration-200">
          <nav className="container mx-auto px-6 pt-28 pb-8 flex flex-col h-full">
            <div className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.nome}
                  href={link.href}
                  className="flex items-center justify-between py-5 border-b border-gray-100 group active:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
                    {link.nome}
                  </span>
                  <ChevronRight
                    size={20}
                    className="text-gray-300 group-hover:text-blue-600"
                  />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://suap.ifpi.edu.br/eventos/inscricao/1/3390/"
                target="_blank"
                className="w-full py-4 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-blue-700 active:scale-95 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Inscrever-se Agora
                <ExternalLink size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
