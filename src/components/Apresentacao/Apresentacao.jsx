import './Apresentacao.css';
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Apresentacao = () => (
    <div className="apresentacao">
        
            <img
                src="https://readme-typing-svg.herokuapp.com?font=Press+Start+2P&pause=1000&color=BE3144&center=true&vCenter=true&width=600&lines=Hello+World!"
                alt="Typing SVG"
            />
            <div className="paragrafo">
                <p>Sou um desenvolvedor de 19 anos, apaixonado por tecnologia e inovação.</p>
                <p>Atualmente curso Engenharia de Software na PUC Minas.</p>
                <p>Estou em constante evolução, buscando experiência prática e novos desafios na área de desenvolvimento de software.</p>
            </div>
            <div className="redes">
                <a href="https://www.linkedin.com/in/joaquim-vilela/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin color="var(--cor-vermelho)" size={50} />
                </a>
                <a href="https://github.com/JoaquimGCVS" target="_blank" rel="noopener noreferrer">
                    <FaGithub color="var(--cor-vermelho)" size={50} />
                </a>
                <a href="mailto:joaquimvilela0902@gmail.com" target="_blank" rel="noopener noreferrer">
                    <BiLogoGmail color="var(--cor-vermelho)" size={50} />
                </a>
                <a href="https://instagram.com/joaquimvilela_" target="_blank" rel="noopener noreferrer">
                    <FaInstagram color="var(--cor-vermelho)" size={50} />
                </a>
                <a href="https://wa.me/5531998185196" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp color="var(--cor-vermelho)" size={50} />
                </a>
            </div>
       
        
    </div>
)

export default Apresentacao;