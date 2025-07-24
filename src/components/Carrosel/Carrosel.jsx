import { useState } from "react";
import "./Carrosel.css";

const Carrossel = ({ imagens }) => {
  const [indice, setIndice] = useState(0);
  const imagensPorPagina = 3;

  // Avança uma imagem por vez
  const anterior = () =>
    setIndice((i) => (i === 0 ? imagens.length - 1 : i - 1));
  const proximo = () =>
    setIndice((i) => (i === imagens.length - 1 ? 0 : i + 1));

  // Seleciona 3 imagens consecutivas, circulando pelo array
  const imagensExibidas = [
    imagens[indice % imagens.length],
    imagens[(indice + 1) % imagens.length],
    imagens[(indice + 2) % imagens.length],
  ];

  return (
    <div className="carrossel">
      <button className="seta" onClick={anterior}>&lt;</button>
      {imagensExibidas.map((img, idx) => (
        <img
          key={indice + '-' + idx}
          src={img}
          alt={`certificado-${indice + idx}`}
          className="carrossel-img"
        />
      ))}
      <button className="seta" onClick={proximo}>&gt;</button>
    </div>
  );
};

export default Carrossel;