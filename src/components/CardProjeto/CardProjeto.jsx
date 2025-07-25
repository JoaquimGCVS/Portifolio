import "./CardProjeto.css";

const CardProjeto = ({titulo, imagem, tecnologias}) => {
    return (
        <div className="card-projeto" style={{backgroundImage: `url(${imagem})`}}>
            <div className="overlay">
                <h2>{titulo}</h2>
                <div className="tecnologias-projeto">
                    {tecnologias.map((Icon, index) => (
                        <span key={index}>{Icon}</span>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default CardProjeto;