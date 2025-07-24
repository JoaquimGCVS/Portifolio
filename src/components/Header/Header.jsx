import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Header.css';

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
                    <li><Link to="/" className="rota">Home</Link></li>
                    <li><Link to="/sobre" className="rota">Sobre</Link></li>
                    <li><Link to="/projetos" className="rota">Projetos</Link></li>
                    <li><Link to="/contato" className="rota">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;