import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Header.css';
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const Header = () => {
    const [visivel, setVisivel] = useState(true);
    const [ultimoScroll, setUltimoScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const atual = window.scrollY;
            if (atual > ultimoScroll && atual > 80) {
                setVisivel(false);
            } else {
                setVisivel(true);
            }
            setUltimoScroll(atual);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [ultimoScroll]);

    return (
        <header className={`header ${visivel ? "show" : "hide"}`}>
            <nav>
                <ul className="rotas">
  <li><Link to="/" className="rota"><FaHome /> Home</Link></li>
  <li><Link to="/sobre" className="rota"><FaCircleInfo /> Sobre</Link></li>
  <li><Link to="/projetos" className="rota"><FaCode /> Projetos</Link></li>
  <li><Link to="/contato" className="rota"><FaSquarePhone /> Contato</Link></li>
</ul>
            </nav>
        </header>
    );
};

export default Header;