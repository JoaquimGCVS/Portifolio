import "./Sobre.css";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaUserGraduate, FaSearch, FaUsers, FaGitAlt } from "react-icons/fa";
import { SiGooglesearchconsole, SiJavascript, SiSpring, SiPostgresql, SiMysql, SiC, SiVercel, SiNetlify, SiVite, SiFigma, SiCamunda, SiCanva } from "react-icons/si";

import certEv1 from '../../assets/certificados/eventos/AulaMagna.webp';

import certTs1 from '../../assets/certificados/typescript/TypeScript1.webp';

import certJava1 from '../../assets/certificados/java/JavaPOO.webp';

import certReact1 from '../../assets/certificados/react/React1.webp';
import certReact2 from '../../assets/certificados/react/React2.webp';

import certJs1 from '../../assets/certificados/javascript/JavaScript1.webp';

import certHtmlCss1 from '../../assets/certificados/htmlcss/HTML-CSS1.webp';
import certHtmlCss2 from '../../assets/certificados/htmlcss/HTML-CSS2.webp';
import certHtmlCss3 from '../../assets/certificados/htmlcss/HTML-CSS3.webp';
import certHtmlCss4 from '../../assets/certificados/htmlcss/HTML-CSS3.webp';
import Carrossel from "../../components/Carrosel/Carrosel";
import { useState } from "react";
import ModalCertificado from "../../components/ModalCertificado/ModalCertificado";


const certificados = [
    certJava1,
    certReact1,
    certReact2,
    certJs1,
    certTs1,
    certHtmlCss1,
    certHtmlCss2,
    certHtmlCss3,
    certHtmlCss4,
    certEv1
];

const Sobre = () => {

    const [modalAberto, setModalAberto] = useState(false);
    const [certificadoSelecionado, setCertificadoSelecionado] = useState(null);

    const abrirModal = (certificado) => {
        setCertificadoSelecionado(certificado);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setCertificadoSelecionado(null);
    };

    return (
        <section id="sobre" className="sobre-section">
            <div className="texto-sobre">
                <div className="card-tecnologias-ferramentas">
                    <h2>Tecnologias & Linguagens</h2>
                    <div className="tecnologias">
                        <div className="grupo-1">
                            <span className="tecnologia" title="Java"><FaJava /></span>
                            <span className="tecnologia" title="React"><FaReact /></span>
                            <span className="tecnologia" title="JavaScript"><SiJavascript /></span>
                            <span className="tecnologia" title="Spring"><SiSpring /></span>
                        </div>
                        <div className="grupo-2">
                            <span className="tecnologia" title="HTML5"><FaHtml5 /></span>
                            <span className="tecnologia" title="CSS3"><FaCss3Alt /></span>
                            <span className="tecnologia" title="MySQL"><SiMysql /></span>
                            <span className="tecnologia" title="PostgreSQL"><SiPostgresql /></span>
                            <span className="tecnologia" title="C"><SiC /></span>
                        </div>
                    </div>
                    <h2>Ferramentas & Plataformas</h2>
                    <div className="ferramentas">
                        <div className="grupo-1">
                            <span className="ferramenta" title="Git"><FaGitAlt /></span>
                            <span className="ferramenta" title="Vercel"><SiVercel /></span>
                            <span className="ferramenta" title="Netlify"><SiNetlify /></span>
                            <span className="ferramenta" title="Vite"><SiVite /></span>
                        </div>
                        <div className="grupo-2">
                            <span className="ferramenta" title="Figma"><SiFigma /></span>
                            <span className="ferramenta" title="Canva"><SiCanva /></span>
                            <span className="ferramenta" title="Camunda"><SiCamunda /></span>
                            <span className="ferramenta" title="Google Search Console"><SiGooglesearchconsole /></span>
                        </div>
                    </div>
                </div>
                <div className="card-sobre">
                    <h2><FaUserGraduate style={{ marginRight: "0.5rem" }} /> Quem sou eu?</h2>
                    <p>
                        Meu nome é Joaquim Vilela, sou um desenvolvedor web em formação com foco em criar soluções funcionais, bem estruturadas e com boa experiência de uso. Estudo Engenharia de Software na PUC Minas e atuo com tecnologias como Java, React.js e Spring Boot. Busco sempre aplicar boas práticas e evoluir através de projetos reais.
                    </p>
                    <h2>
                        <FaSearch style={{ marginRight: "0.5rem" }} />
                        Olhar para os detalhes.
                    </h2>
                    <p>
                        Acredito que cada ajuste, cada decisão e cada linha de código contribuem para um resultado final mais profissional, eficiente e agradável de usar. Busco sempre unir organização, estética e clareza para entregar soluções completas e de qualidade.
                    </p>
                    <h2><FaUsers style={{ marginRight: "0.5rem" }} />Além do código.</h2>
                    <p>
                        Além da parte técnica, valorizo a comunicação clara, o comprometimento com prazos e a entrega com qualidade. Já participei de projetos reais onde pude exercitar a empatia com o usuário, a colaboração em equipe e o foco em resultados concretos.
                    </p>
                </div>
            </div>
            <div className="certificados">
                <h2>Certificados</h2>
                <Carrossel imagens={certificados} onImageClick={abrirModal} />
            </div>
            {modalAberto && (
                <ModalCertificado
                    imageSrc={certificadoSelecionado}
                    onClose={fecharModal}
                />
            )}
        </section>
    )
}

export default Sobre;