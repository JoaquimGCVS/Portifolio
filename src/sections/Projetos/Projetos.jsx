import CardProjeto from "../../components/CardProjeto/CardProjeto";
import "./Projetos.css";

import certSiteInst from '../../assets/projetos/SiteInstitucionalOrtho.webp';
import certEstoqueOrtho from '../../assets/projetos/EstoqueOrtho.webp';
import certEstoqueFull from '../../assets/projetos/EstoqueFullStack.webp';
import certPortifolio from '../../assets/projetos/Portifolio.webp';

import { FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiSpring, SiMysql, SiC, SiVercel, SiNetlify, SiVite, SiFigma } from "react-icons/si";
import ModalProjeto from "../../components/ModalProjeto/ModalProjeto";
import { useState } from "react";

const projetos = [
  {
    titulo: "Site Institucional Orthomóveis Colchões Orthocrin",
    imagem: certSiteInst,
    desc: "Site institucional oficial da loja Orthomóveis Colchões Orthocrin, desenvolvido inteiramente por Joaquim Vilela utilizando React + Vite. O projeto tem como objetivo destacar os produtos da loja, sua história, tradição desde 1972 e seus principais diferenciais competitivos. Toda a estrutura do site foi pensada para manter a harmonia visual, evitar poluição visual e ao mesmo tempo destacar com elegância as informações mais importantes, sempre seguindo as demandas do cliente.",
    tecnologias: [<FaReact />, <SiVite />, <SiNetlify/>],
    video: "https://www.youtube.com/embed/daZwzn-8GJk",
    linkSite: "https://orthomoveiscolchoes.com.br/",
    linkGithub: "https://github.com/JoaquimGCVS/site-institucional-orthomoveis"
  },
  {
    titulo: "Estoque Orthomóveis Colchões Orthocrin",
    imagem: certEstoqueOrtho,
    desc: "O sistema executa um CRUD completo para produtos, clientes e vendas, com persistência de dados via localStorage. A aplicação inclui funcionalidades de importação e exportação de dados em JSON, facilitando processos de backup, migração e recuperação dos dados, além de sustentar o modelo de armazenamento local. O projeto conta com um dashboard dinâmico que apresenta indicadores-chave de desempenho do estoque e dos produtos, além de relatórios de vendas interativos com filtros por múltiplos critérios.",
    tecnologias: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiNetlify/>],
    video: "https://www.youtube.com/embed/daZwzn-8GJk",
    linkSite: "https://orthomoveisestoquepublic.netlify.app/",
    linkGithub: "https://github.com/JoaquimGCVS/Orthomoveis-Colchoes-Estoque"
  },
  {
    titulo: "Joaquim Estoque Full-Stack",
    imagem: certEstoqueFull,
    desc: "Um sistema full stack para gerenciamento de estoque, desenvolvido utilizando Spring Boot com banco de dados MySQL no back-end e HTML + CSS e JavaScript puro no front-end. A aplicação permite realizar o cadastro de produtos, controle de entrada e saída, além de acompanhar o estoque em tempo real de forma simples e eficiente.",
    tecnologias: [<FaJava />, <SiSpring />, <SiMysql/>, <FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiNetlify/>],
    video: "https://www.youtube.com/embed/daZwzn-8GJk",
    linkSite: "",
    linkGithub: "https://github.com/JoaquimGCVS/Estoque-Full-Stack"
  },
  {
    titulo: "Portifólio - Joaquim Vilela",
    imagem: certPortifolio,
    desc: "O projeto tem como objetivo apresentar minha trajetória profissional, habilidades técnicas, projetos desenvolvidos e certificações obtidas de forma elegante e interativa. A estrutura do site foi pensada para manter a harmonia visual, evitar poluição visual e ao mesmo tempo destacar as informações mais importantes, criando uma experiência profissional para visitantes e recrutadores.",
    tecnologias: [<FaReact />, <SiVite />, <SiNetlify/>],
    video: "https://www.youtube.com/embed/daZwzn-8GJk",
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
        />
      )}
    </section>
  );
};

export default Projetos;