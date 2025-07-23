import { Link } from "react-router-dom";
import './Header.css';

const Header = () => (
    <header className="header">
        <nav>
            <ul className="rotas">
                <li><Link to="/" className="rota">Home</Link></li>
                <li><Link to="/sobre" className="rota">Sobre</Link></li>
                <li><Link to="/projetos" className="rota">Projetos</Link></li>
                <li><Link to="/contato" className="rota">Contato</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;