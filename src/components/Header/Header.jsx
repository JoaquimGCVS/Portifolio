import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
    <header className="header">
        <nav className="navegacao">
            <Link to="/" ><h1>Joaquim Vilela</h1></Link>
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/sobre">Sobre</NavLink></li>
                <li><NavLink to="/projetos">Projetos</NavLink></li>
                <li><NavLink to="/contato">Contato</NavLink></li>
            </ul>
        </nav>
    </header>
)

export default Header; 