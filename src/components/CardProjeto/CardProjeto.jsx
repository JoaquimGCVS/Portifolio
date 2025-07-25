import "./CardProjeto.css";

const CardProjeto = ({ titulo, imagem, tecnologias, onClick }) => (

    <div className="card-projeto" style={{ backgroundImage: `url(${imagem})` }} onClick={onClick}>
        <div className="overlay">
            <h2 className="titulo">{titulo}</h2>
            <div className="tecnologias-projeto">
                {tecnologias.map((Icon, index) => (
                    <span key={index}>{Icon}</span>
                ))}
            </div>
        </div>
    </div>
)
    ;

export default CardProjeto;