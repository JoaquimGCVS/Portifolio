import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Header.css';
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const Header = () => {
    const [visivel, setVisivel] = useState(true);
    const [ultimoScroll, setUltimoScroll] = useState(0);
    const [sidebarAberto, setSidebarAberto] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const atual = window.scrollY;
            
            // Aplica hide/show tanto no header quanto no botão hambúrguer
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

    const toggleSidebar = () => {
        setSidebarAberto(!sidebarAberto);
    };

    const fecharSidebar = () => {
        setSidebarAberto(false);
    };

    return (
        <>
            {/* Botão hambúrguer com hide/show */}
            <button 
                className={`menu-toggle ${visivel ? "show" : "hide"}`} 
                onClick={toggleSidebar}
            >
                {sidebarAberto ? <FaTimes /> : <FaBars />}
            </button>

            {/* Overlay */}
            <div 
                className={`sidebar-overlay ${sidebarAberto ? 'active' : ''}`}
                onClick={fecharSidebar}
            ></div>

            {/* Header/Sidebar */}
            <header className={`header ${visivel ? "show" : "hide"} ${sidebarAberto ? "sidebar-open" : ""}`}>
                <nav>
                    <ul className="rotas">
                        <li><Link to="/" className="rota" onClick={fecharSidebar}><FaHome /> Home</Link></li>
                        <li><Link to="/sobre" className="rota" onClick={fecharSidebar}><FaCircleInfo /> Sobre</Link></li>
                        <li><Link to="/projetos" className="rota" onClick={fecharSidebar}><FaCode /> Projetos</Link></li>
                        <li><Link to="/contato" className="rota" onClick={fecharSidebar}><FaSquarePhone /> Contato</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;