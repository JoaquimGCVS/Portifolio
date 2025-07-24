import "./Marquee.css";

const Marquee = ({ imagens }) => (
  <div className="marquee">
    <div className="marquee-inner">
      {imagens.map((img, idx) => (
        <img src={img} alt={`marquee-${idx}`} key={idx} className="marquee-img" />
      ))}
      {imagens.map((img, idx) => (
        <img src={img} alt={`marquee-dup-${idx}`} key={`dup-${idx}`} className="marquee-img" />
      ))}
    </div>
  </div>
);

export default Marquee;