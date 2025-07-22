import './Apresentacao.css';
import { useState, useEffect } from 'react';
import me from '../../assets/me2.png';
import { MdOutlineFileDownload } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const fullText = "I'm Joaquim Vilela!";

const Apresentacao = () => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;
        if (!isDeleting && displayText.length < fullText.length) {
            timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1));
            }, 150);
        } else if (!isDeleting && displayText.length === fullText.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length - 1));
            }, 100);
        } else if (isDeleting && displayText.length === 0) {
            setIsDeleting(false);
        }
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting]);

    return (
        <div className="apresentacao">
            <div className="texto">
                <p className="typing-text">
                    {displayText}
                    <span className="cursor">|</span>
                </p>
                <h2>FULL-STACK DEVELOPER</h2>
                <p>Entrego soluções digitais modernas, escaláveis e intuitivas. Trabalho com sites e sistemas integrados, sempre focando em criar experiências de valor.</p>

                <a href="/Joaquim_Curriculo.pdf" download className="cv-a">
                    <MdOutlineFileDownload size={30} /> Download CV
                </a>
                <div className='links'>
                    <a href="https://wa.me/5531998185196" target="_blank" rel="noopener noreferrer" className="whatsapp-a">
                        <RiWhatsappLine size={50} />
                    </a>
                    <a href="https://www.linkedin.com/in/joaquim-vilela/" target="_blank" rel="noopener noreferrer" className="linkedin-a">
                        <FaLinkedin size={50} />
                    </a>
                </div>
            </div>
            <img src={me} alt="me" />
        </div>
    );
};

export default Apresentacao;