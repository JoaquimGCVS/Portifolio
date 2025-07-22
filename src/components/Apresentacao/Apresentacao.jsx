import './Apresentacao.css';
import { useState, useEffect } from 'react';
import me from '../../assets/me.webp';

const Apresentacao = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = "I'm Joaquim Vilela!";
    const typingSpeed = 150; 
    const deletingSpeed = 100; 
    const pauseTime = 2000; 

    useEffect(() => {
        const speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && currentIndex < fullText.length) {
            // Digitando
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else if (!isDeleting && currentIndex === fullText.length) {
            // Pausa antes de começar a apagar
            const timeout = setTimeout(() => {
                setIsDeleting(true);
            }, pauseTime);
            return () => clearTimeout(timeout);
        } else if (isDeleting && currentIndex > 0) {
            // Apagando
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev.slice(0, -1));
                setCurrentIndex(prev => prev - 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else if (isDeleting && currentIndex === 0) {
            // Reinicia o ciclo
            setIsDeleting(false);
        }
    }, [currentIndex, isDeleting, fullText]);

    return (
        <div className="apresentacao">
            <div className="texto">
                <p className="typing-text">
                    {displayText}
                    <span className="cursor">|</span>
                </p>
                <p>Desenvolvedor Full Stack e graduando em Engenharia de Software na PUC Minas, crio soluções web sob medida que elevam a eficiência do seu negócio com React, Java e Spring Boot.</p>
            </div>
            <img src={me} alt="me" />
        </div>
    );
};

export default Apresentacao;