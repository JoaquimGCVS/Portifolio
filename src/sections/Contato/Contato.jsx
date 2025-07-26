import Typing from "../../components/Typing/Typing";
import "./Contato.css";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contato = () => (
    <section id="contato" className="contato-section">
        <h2>Vamos conversar?</h2>
        <div className="minhas-redes-sociais">
            <a href="https://wa.me/5531998185196" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/in/joaquim-vilela/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/JoaquimGCVS" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://instagram.com/joaquimvilela_" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:joaquimvilela0902@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail /></a>
        </div>
        <p className="citacao">Design encontra lógica. Estética encontra performance.</p>
        <Typing textoCompleto={"It was a pleasure!"} className="p-typing" />
    </section>
)

export default Contato;