import React from 'react';
import { Terminal, Database, Code, Globe, Laptop, Layout, Cpu, Layers, Mail, Github } from 'lucide-react';

// Componente de Card de Habilidade
const SkillCard = ({ icon: Icon, title, description, color }) => (
  <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300 group text-left">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
      <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function App() {
  const githubUrl = "https://github.com/mozartdev-0";

  const skills = [
    {
      icon: Code,
      title: "JavaScript (ES6+)",
      description: "Desenvolvimento de aplicações modernas com lógica assíncrona, manipulação de DOM e ESModules.",
      color: "bg-yellow-500"
    },
    {
      icon: Database,
      title: "SQL & PostgreSQL",
      description: "Gerenciamento de bancos de dados relacionais, modelagem de dados e integração com serviços de nuvem.",
      color: "bg-blue-500"
    },
    {
      icon: Terminal,
      title: "Node.js",
      description: "Construção de ambientes escaláveis no lado do servidor e integração de APIs RESTful.",
      color: "bg-green-500"
    },
    {
      icon: Layout,
      title: "React",
      description: "Criação de interfaces de utilizador reativas com hooks, gestão de estado e componentes funcionais.",
      color: "bg-cyan-400"
    },
    {
      icon: Globe,
      title: "HTML5 & CSS3",
      description: "Estruturação web semântica e estilização avançada com foco em responsividade.",
      color: "bg-orange-500"
    },
    {
      icon: Layers,
      title: "Arquitetura de Software",
      description: "Aplicação de boas práticas de programação, clean code e versionamento com Git.",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-blue-500 selection:text-white font-sans">
      {/* Navbar Minimalista */}
      <nav className="px-8 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <span className="text-xl font-bold tracking-tighter hover:text-blue-500 cursor-default transition-colors">
          DEVELOPER<span className="text-blue-500">_</span>
        </span>
        <div className="flex gap-6 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">Sobre</a>
          <a href="#skills" className="hover:text-white transition-colors">Habilidades</a>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white transition-colors font-bold text-blue-500"
          >
            GitHub
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20 text-center md:text-left">
        {/* Seção Principal */}
        <header id="about" className="mb-32">
          <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono mb-6">
            Disponível para novos desafios
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-none">
            Desenvolvedor <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
              Fullstack.
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Focado em construir soluções digitais sólidas, desde a arquitetura do banco de dados 
            até à interface final. Especialista em JavaScript e tecnologias do ecossistema moderno.
          </p>
        </header>

        {/* Grade de Habilidades */}
        <section id="skills" className="py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mb-2">Stack Técnica</h2>
              <p className="text-zinc-500">Tecnologias e ferramentas que utilizo no dia a dia.</p>
            </div>
            <div className="h-[1px] bg-zinc-800 flex-grow hidden md:block mx-8 mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </section>

        {/* Seção de Workflow */}
        <section className="mt-32 p-12 rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
          
          <div className="relative z-10 max-w-3xl text-left">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Cpu className="text-blue-500" /> Metodologia de Trabalho
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              A minha abordagem foca-se em escrever código limpo, testável e escalável. 
              Utilizo Git para versionamento contínuo e priorizo ferramentas que oferecem 
              a melhor performance para o utilizador final.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Git', 'Vite', 'PostgreSQL', 'Tailwind CSS', 'REST APIs', 'Supabase'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-black text-zinc-400 text-sm rounded-xl border border-zinc-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="mt-20 border-t border-zinc-900 py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Vamos criar algo juntos?</h3>
          <p className="text-zinc-500 mb-8 text-sm">
            Atualmente focado em projetos que utilizam JavaScript, Node.js e React.
          </p>
          <div className="flex justify-center gap-8 text-zinc-400">
            <a href="mailto:seu-email@exemplo.com" className="hover:text-blue-500 transition-colors flex items-center gap-2">
              <Mail size={18} /> Email
            </a>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-blue-500 transition-colors flex items-center gap-2"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
          <p className="mt-16 text-zinc-600 text-xs font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} — Desenvolvido com React + Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}