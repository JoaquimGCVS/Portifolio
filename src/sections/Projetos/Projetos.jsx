import CardProjeto from "../../components/CardProjeto/CardProjeto";
import "./Projetos.css";
import certEv1 from '../../assets/certificados/eventos/AulaMagna.webp';

import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaUserGraduate, FaSearch, FaUsers, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiSpring, SiMysql, SiC, SiVercel, SiNetlify, SiVite, SiFigma } from "react-icons/si";

const Projetos = () => {
    return (
        <section id="projetos" className="projetos-section">
            <div className="container-projetos">
                <CardProjeto
                titulo="Outro Projeto"
                imagem={certEv1}
                tecnologias={[<FaCss3Alt  />, <FaCss3Alt  />, <FaCss3Alt  />, <FaCss3Alt />]}
                />
                <CardProjeto
                titulo="Outro Projeto"
                imagem={certEv1}
                tecnologias={[<FaCss3Alt size={24} />, <FaCss3Alt size={24} />, <FaCss3Alt size={24} />, <FaCss3Alt size={24} />]}
                />
                <CardProjeto
                titulo="Outro Projeto"
                imagem={certEv1}
                tecnologias={[<FaCss3Alt size={24} />, <FaCss3Alt size={24} />, <FaCss3Alt size={24} />, <FaCss3Alt size={24} />]}
                />
                <CardProjeto
                titulo="Outro Projeto"
                imagem={certEv1}
                tecnologias={[<FaCss3Alt size={24} />, <FaCss3Alt size={24} />, <FaCss3Alt size={24} />, <FaCss3Alt size={24} />]}
                />
                <CardProjeto
                titulo="Outro Projeto"
                imagem={certEv1}
                tecnologias={[<FaCss3Alt size={24} />, <FaCss3Alt size={24} />, <FaCss3Alt size={24} />, <FaCss3Alt size={24} />]}
                />
                <CardProjeto
                titulo="Outro Projeto"
                imagem={certEv1}
                tecnologias={[<FaCss3Alt size={24} />, <FaCss3Alt size={24} />, <FaCss3Alt size={24} />, <FaCss3Alt size={24} />]}
                />
            </div>
        </section>
    )
}

export default Projetos;