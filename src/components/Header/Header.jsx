import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
    <header className="header">
        <nav className="navegacao">
            <ul>    
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/sobre">Sobre</NavLink>
                <NavLink to="/projetos">Projetos</NavLink>
                <NavLink to="/contato">Contato</NavLink>
            </ul>
        </nav>
    </header>
)

export default Header; 