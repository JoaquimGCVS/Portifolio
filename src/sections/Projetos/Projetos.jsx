import CardProjeto from "../../components/CardProjeto/CardProjeto";
import "./Projetos.css";
import certEv1 from '../../assets/certificados/eventos/AulaMagna.webp';

import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiSpring, SiMysql, SiC, SiVercel, SiNetlify, SiVite, SiFigma } from "react-icons/si";
import ModalProjeto from "../../components/ModalProjeto/ModalProjeto";
import { useState } from "react";

const projetos = [
  {
    titulo: "Outro Projeto",
    imagem: certEv1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem omnis, quae quaerat quisquam nostrum enim. Ratione expedita sapiente animi ullam enim dolor consequuntur molestias amet incidunt nobis? Veniam, corporis.",
    tecnologias: [<FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />],
    video: "https://www.youtube.com/embed/daZwzn-8GJk"
  },
  {
    titulo: "Outro Projeto",
    imagem: certEv1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem omnis, quae quaerat quisquam nostrum enim. Ratione expedita sapiente animi ullam enim dolor consequuntur molestias amet incidunt nobis? Veniam, corporis.",
    tecnologias: [<FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />],
    video: "https://www.youtube.com/embed/daZwzn-8GJk"
  },
  {
    titulo: "Outro Projeto",
    imagem: certEv1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem omnis, quae quaerat quisquam nostrum enim. Ratione expedita sapiente animi ullam enim dolor consequuntur molestias amet incidunt nobis? Veniam, corporis.",
    tecnologias: [<FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />],
    video: "https://www.youtube.com/embed/daZwzn-8GJk"
  },
  {
    titulo: "Outro Projeto",
    imagem: certEv1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem omnis, quae quaerat quisquam nostrum enim. Ratione expedita sapiente animi ullam enim dolor consequuntur molestias amet incidunt nobis? Veniam, corporis.",
    tecnologias: [<FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />],
    video: "https://www.youtube.com/embed/daZwzn-8GJk"
  },
  {
    titulo: "Outro Projeto",
    imagem: certEv1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem omnis, quae quaerat quisquam nostrum enim. Ratione expedita sapiente animi ullam enim dolor consequuntur molestias amet incidunt nobis? Veniam, corporis.",
    tecnologias: [<FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />],
    video: "https://www.youtube.com/embed/daZwzn-8GJk"
  },
  {
    titulo: "Outro Projeto",
    imagem: certEv1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem omnis, quae quaerat quisquam nostrum enim. Ratione expedita sapiente animi ullam enim dolor consequuntur molestias amet incidunt nobis? Veniam, corporis.",
    tecnologias: [<FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />],
    video: "https://www.youtube.com/embed/daZwzn-8GJk"
  },
  {
    titulo: "Outro Projeto",
    imagem: certEv1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem omnis, quae quaerat quisquam nostrum enim. Ratione expedita sapiente animi ullam enim dolor consequuntur molestias amet incidunt nobis? Veniam, corporis.",
    tecnologias: [<FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />],
    video: "https://www.youtube.com/embed/daZwzn-8GJk"
  },
  {
    titulo: "Outro Projeto",
    imagem: certEv1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem omnis, quae quaerat quisquam nostrum enim. Ratione expedita sapiente animi ullam enim dolor consequuntur molestias amet incidunt nobis? Veniam, corporis.",
    tecnologias: [<FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />, <FaCss3Alt />],
    video: "https://www.youtube.com/embed/daZwzn-8GJk"
  }
  // ...adicione outros projetos se quiser
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
      <h2>Meus Projetos</h2>
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
        <ModalProjeto projeto={projetoSelecionado} onClose={fecharModal} />
      )}
    </section>
  );
};

export default Projetos;