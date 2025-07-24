import React, { useRef } from "react";
import "./Carrosel.css";

const Carrossel = ({ imagens }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const slideWidth = container.offsetWidth / 3 + 32; // largura + gap (2rem = 32px)
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "right") {
      if (scrollLeft + slideWidth >= maxScroll) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: slideWidth, behavior: "smooth" });
      }
    } else {
      if (scrollLeft - slideWidth <= 0) {
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
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="navegar direita" onClick={() => scroll("right")}>
        &#10095;
      </button>
    </div>
  );
};

export default Carrossel;
