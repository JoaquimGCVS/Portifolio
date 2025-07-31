import React, { useRef } from "react";
import "./Carrosel.css";

const Carrossel = ({ imagens, onImageClick }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const slideWidth = container.offsetWidth / 3 + 32;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const tolerance = 2; // margem de erro para considerar o final/início

    if (direction === "right") {
      if (scrollLeft >= maxScroll - tolerance) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: slideWidth, behavior: "smooth" });
      }
    } else {
      if (scrollLeft <= tolerance) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -slideWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="carrossel-wrapper">
      <button className="navegar esquerda" onClick={() => scroll("left")}>
        &#10094;
      </button>
      <div className="carrossel-container" ref={containerRef}>
        {imagens.map((src, index) => (
          <div className="slide" key={index}>
            <img src={src} alt={`Slide ${index}`} onClick={() => onImageClick && onImageClick(src)} style={{ cursor: 'pointer' }}/>
          </div>
        ))}
      </div>
      <button className="navegar direita" onClick={() => scroll("right")} >
        &#10095;
      </button>
    </div>
  );
};

export default Carrossel;
