import "./CardProjeto.css";

const CardProjeto = ({ titulo, imagem, tecnologias, onClick, data }) => (

    <div className="card-projeto" style={{ backgroundImage: `url(${imagem})` }} onClick={onClick}>
        <div className="overlay">
            <h2 className="titulo">{titulo}</h2>
            <div className="tecnologias-projeto">
                {tecnologias.map((Icon, index) => (
                    <span key={index}>{Icon}</span>
                ))}
            </div>
        </div>
        <div className="data-extensao">
            <span>{data}</span>
        </div>
    </div>
);

export default CardProjeto;