import CardProjeto from "../../components/CardProjeto/CardProjeto";
import "./Projetos.css";

import certSiteInst from '../../assets/projetos/SiteInstitucionalOrtho.webp';
import certEstoqueOrtho from '../../assets/projetos/EstoqueOrtho.webp';
import certEstoqueFull from '../../assets/projetos/EstoqueFullStack.webp';
import certPortifolio from '../../assets/projetos/Portifolio.webp';

import { FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiGooglesearchconsole, SiJavascript, SiSpring, SiMysql, SiC, SiVercel, SiNetlify, SiVite, SiFigma } from "react-icons/si";
import ModalProjeto from "../../components/ModalProjeto/ModalProjeto";
import { useState } from "react";

const projetos = [
  {
    titulo: "Site Institucional Orthomóveis Colchões Orthocrin",
    imagem: certSiteInst,
    data: "Julho 2025",
    desc1: "Desenvolvi o site institucional oficial da Orthomóveis Colchões Orthocrin utilizando React + Vite. O desafio era criar uma presença digital que refletisse a solidez e confiabilidade da marca.",
    desc2: "Todo o projeto foi pensado para manter harmonia visual e evitar poluição, destacando com os produtos e diferenciais competitivos da loja. Trabalhei diretamente com o cliente para entender suas necessidades e traduzir sua visão em uma interface moderna e atrativa.",
    desc3: "O resultado foi um site responsivo e profissional que representa fielmente os valores da empresa, com navegação intuitiva e design que conversa diretamente com o público-alvo. A experiência me permitiu aplicar boas práticas de UX/UI em um projeto real.",
    tecnologias: [
      <FaReact title="React" />, 
      <SiVite title="Vite" />, 
      <SiNetlify title="Netlify" />, 
      <SiGooglesearchconsole title="Google Search Console" />
    ],
    responsivo: true,
    video: "/videos/Estoque-Full-Stack.mp4",
    videoMobile: "/videos/Estoque-Full-Stack.mp4",
    linkSite: "https://orthomoveiscolchoes.com.br/",
    linkGithub: "https://github.com/JoaquimGCVS/site-institucional-orthomoveis"
  },
  {
    titulo: "Sistema de Estoque Orthomóveis Colchões Orthocrin",
    imagem: certEstoqueOrtho,
    data: "Abril 2025",
    desc1: "Criei um sistema completo de gestão de estoque para resolver problemas reais de controle de produtos, clientes e vendas da empresa. Utilizei JavaScript + localStorage para garantir que a aplicação funcionasse de forma independente.",
    desc2: "O sistema oferece um CRUD completo com funcionalidades de importação e exportação de dados em JSON, facilitando backups e migração de informações. Desenvolvi também um dashboard dinâmico que apresenta indicadores-chave de desempenho do estoque em tempo real.",
    desc3: "Adicionei relatórios interativos de vendas com filtros personalizáveis, permitindo análises detalhadas do negócio. Foi gratificante ver como a ferramenta otimizou os processos da empresa e trouxe mais organização para o dia a dia operacional.",
    desc4: <>Para testar, faça login com o e-mail <strong style={{color: "black"}}>admin@gmail.com</strong> senha <strong style={{color: "black"}}>123</strong>.</>,
    tecnologias: [
      <FaHtml5 title="HTML5" />, 
      <FaCss3Alt title="CSS3" />, 
      <SiJavascript title="JavaScript" />, 
      <SiNetlify title="Netlify" />
    ],
    video: "/videos/Orthomoveis-Estoque.mp4",
    linkSite: "https://orthomoveisestoquepublic.netlify.app/",
    linkGithub: "https://github.com/JoaquimGCVS/Orthomoveis-Colchoes-Estoque"
  },
  {
    titulo: "Joaquim Estoque Full-Stack",
    imagem: certEstoqueFull,
    data: "Janeiro 2025",
    desc1: "Desenvolvi este sistema full stack. Utilizei Spring Boot com MySQL para criar uma API robusta e segura, enquanto o front-end foi construído com HTML + CSS e JavaScript.",
    desc2: "O foco principal foi criar uma solução simples, mas eficiente, para gerenciamento de estoque em tempo real. Implementei todas as operações CRUD necessárias e me concentrei em desenvolver uma interface limpa e intuitiva para os usuários.",
    desc3: "Este projeto me permitiu aprofundar conhecimentos em integração entre diferentes tecnologias. Foi uma excelente oportunidade para praticar o desenvolvimento completo de uma aplicação, desde a modelagem do banco até a experiência do usuário.",
    desc4: <>Para testar, faça login com o e-mail <strong style={{color: "black"}}>admin@gmail.com</strong> e senha <strong style={{color: "black"}}>4321</strong>.</>,
    tecnologias: [
      <FaJava title="Java" />, 
      <SiSpring title="Spring Boot" />, 
      <SiMysql title="MySQL" />, 
      <FaHtml5 title="HTML5" />, 
      <FaCss3Alt title="CSS3" />, 
      <SiJavascript title="JavaScript" />, 
      <SiNetlify title="Netlify" />
    ],
    video: "/videos/Estoque-Full-Stack.mp4",
    linkSite: "",
    linkGithub: "https://github.com/JoaquimGCVS/Estoque-Full-Stack"
  },
  {
    titulo: "Portifólio - Joaquim Vilela",
    imagem: certPortifolio,
    data: "Julho 2025",
    desc1: "Criei este portfólio como uma forma de apresentar minha trajetória profissional e projetos desenvolvidos. Utilizei React + Vite para construir uma experiência moderna que reflete minha evolução como desenvolvedor.",
    desc2: "O design foi planejado para manter harmonia visual e destacar as informações mais importantes sem criar poluição. Mais que um simples CV online, este portfólio representa minha paixão por criar soluções que unem funcionalidade e estética.",
    desc3: "É um projeto em constante evolução, que atualizo conforme me desenvolvo profissionalmente e aprendo novas tecnologias.",
    tecnologias: [
      <FaReact title="React" />, 
      <SiVite title="Vite" />, 
      <SiNetlify title="Netlify" />
    ],
    responsivo: true,
    video: "/videos/portifolio-dev.mp4",
    videoMobile: "/videos/portifolio-dev.mp4",
    linkSite: "https://joaquimvilela.netlify.app/",
    linkGithub: "https://github.com/JoaquimGCVS/Portifolio"
  }
];

const Projetos = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const abrirModal = (projeto) => {
    setProjetoSelecionado(projeto);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProjetoSelecionado(null);
  };

  return (
    <section id="projetos" className="projetos-section">
      <h2>&lt;Meus Projetos/&gt;</h2>
      <div className="container-projetos">
        {projetos.map((projeto, idx) => (
          <CardProjeto
            key={idx}
            titulo={projeto.titulo}
            imagem={projeto.imagem}
            tecnologias={projeto.tecnologias}
            data={projeto.data}
            onClick={() => abrirModal(projeto)}
          />

        ))}

      </div>
      {modalAberto && (
        <ModalProjeto
          projeto={projetoSelecionado}
          onClose={fecharModal}
          linkSite={projetoSelecionado?.linkSite}
          linkGithub={projetoSelecionado?.linkGithub}
          responsivo={projetoSelecionado?.responsivo}
        />
      )}
    </section>
  );
};

export default Projetos;