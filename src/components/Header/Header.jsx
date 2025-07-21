import { Link } from "react-router-dom";
import "./Header.css";
import { FaLaptopCode } from "react-icons/fa6";

const Header = () => (
    <header className="header">
        <nav className="navegacao">
            <Link to="/">    
                <div className="logo">
                    <FaLaptopCode size={30}/>
                    <h1>Joaquim Vilela</h1>
                </div>
            </Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header; 