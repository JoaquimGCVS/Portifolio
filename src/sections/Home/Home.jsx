import Typing from "../../components/Typing/Typing";
import './Home.css';
import me from '../../assets/me.jpeg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Home = () => (
    <section id="home" className="home-section">
        <div className="texto">
            <Typing textoCompleto={"Hello World, I'm Joaquim Vilela"} />
            <h1>Full-Stack Developer</h1>
            <p className="paragrafo">Entrego soluções digitais modernas, escaláveis e intuitivas. Trabalho com sites e sistemas integrados, sempre focando em criar experiências de valor.</p>
            <a href="/Joaquim_Curriculo.pdf" download className="botao-cv">
                <IoMdDownload /> Baixar Currículo
            </a>
            <div className="redes-sociais">
                <a href="https://www.linkedin.com/in/joaquim-vilela/" className="rede-social" target="_blank"><FaLinkedin ></FaLinkedin></a>
                <a href="https://github.com/JoaquimGCVS" className="rede-social" target="_blank"><FaGithub ></FaGithub></a>
            </div>
        </div>
        <div className="imagem">
            <img src={me} alt="me" />
        </div>
    </section>
)

export default Home;