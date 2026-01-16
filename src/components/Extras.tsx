import { Camera, ExternalLink } from 'lucide-react';

export function Apoiadores() {
  // Ajuste os nomes dos arquivos conforme você salvou na pasta public/logos
  const parceiros = [
    { nome: "IFPI Picos", logo: "/logos/ifpi-picos.jpeg" },
    { nome: "NEPI", logo: "/logos/nepi-logo.png" },
    { nome: "Vale do Mel", logo: "/logos/vale-mel-logo.png" },
    { nome: "Sebrae", logo: "/logos/sebrae-logo.png" },
    { nome: "Virtex", logo: "/logos/virtex-logo.png" },
    { nome: "Mambee", logo: "/logos/logo-mambee.png" },
  ];

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
          Realização e Apoio
        </h3>
        
        {/* Grid de Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {parceiros.map((parceiro, i) => (
            <div 
              key={i} 
              // MUDANÇA AQUI: Adicionei 'md:' antes das classes de grayscale e opacity.
              // Significa: "No celular é colorido normal. No PC (md), começa cinza e fica colorido no hover."
              className="group flex items-center justify-center h-20 w-32 md:w-40 transition-all duration-300 md:grayscale md:opacity-70 md:hover:grayscale-0 md:hover:opacity-100"
            >
              <img 
                src={parceiro.logo} 
                alt={parceiro.nome} 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Galeria() {
  return (
    <section className="py-24 bg-blue-900 text-white relative overflow-hidden" id="galeria">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <Camera size={48} className="mx-auto mb-6 text-blue-300" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria de Fotos</h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Confira todos os registros oficiais do evento, apresentações e premiações em nosso álbum oficial.
        </p>
        
        <a 
          href="#" // LEMBRE-SE DE COLOCAR O LINK REAL DO DRIVE/FOTOS AQUI DEPOIS
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
        >
          Acessar Álbum de Fotos
          <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
}