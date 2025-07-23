import { useState, useEffect } from "react";

const Typing = ({ texto, velocidade = 100 }) => {
    const [exibido, setExibido] = useState = ("");
    useEffect(() => {
        let i = 0;
        const intervalo = setInterval(() => {
            setExibido((anterior) => anterior + texto[i]);
            i++;
            if (i >= texto.length) clearInterval(intervalo);
        }, velocidade);
        return () => clearInterval(intervalo);
    }, [texto, velocidade]);
    return <p>{exibido}</p>;
};

export default Typing;