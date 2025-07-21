import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { PiCodeBold } from "react-icons/pi";

const Header = () => (
    <header className="header">
        <nav className="navegacao">
            <Link to="/">    
                <div className="logo">
                    <PiCodeBold size={25}/>
                    <h1>Joaquim Vilela</h1>
                </div>
            </Link>
            <ul>    
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/sobre">Sobre</NavLink>
                <NavLink to="/sobre">Sobre</NavLink>
                <NavLink to="/sobre">Sobre</NavLink>
                <NavLink to="/sobre">Sobre</NavLink>
            </ul>
        </nav>
    </header>
)

export default Header; 