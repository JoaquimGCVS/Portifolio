import { useState, useEffect } from "react";
import "./Typing.css";

const Typing = ({ textoCompleto, velocidade = 100 }) => {
    const [textoExibido, setTextoExibido] = useState('');
    const [apagando, setApagando] = useState(false);

    useEffect(() => {
        let temporizador;
        if (!apagando && textoExibido.length < textoCompleto.length) {
            // Digitando: adiciona uma letra
            temporizador = setTimeout(() => {
                setTextoExibido(textoCompleto.slice(0, textoExibido.length + 1));
            }, 150);
        } else if (!apagando && textoExibido.length === textoCompleto.length) {
            // Pausa ao terminar de digitar
            temporizador = setTimeout(() => setApagando(true), 2000);
        } else if (apagando && textoExibido.length > 0) {
            // Apagando: remove uma letra
            temporizador = setTimeout(() => {
                setTextoExibido(textoCompleto.slice(0, textoExibido.length - 1));
            }, 100);
        } else if (apagando && textoExibido.length === 0) {
            // Quando termina de apagar, volta a digitar
            setApagando(false);
        }
        return () => clearTimeout(temporizador);
    }, [textoExibido, apagando]);

    return <p className="typing">{textoExibido}<span className="cursor">|</span></p>;
}

export default Typing;