import { useEffect } from "react";
import "./ModalProjeto.css";
import { IoMdClose } from "react-icons/io";

const ModalProjeto = ({ projeto, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-conteudo" onClick={e => e.stopPropagation()}>
                <div className="projeto-conteudo">
                    <iframe src={projeto.video} title={projeto.titulo} frameBorder="0" allowFullScreen />
                    <div className="texto-modal">
                        <h3>{projeto.titulo}</h3>
                        <p>{projeto.desc}</p>
                        <span>
                            {projeto.tecnologias.map((Icon, idx) => (
                                <span key={idx}>{Icon}</span>
                            ))}
                        </span>
                    </div>
                </div>
                <button className="btn-fechar" onClick={onClose}><IoMdClose /></button>
            </div>
        </div>
    )
}

export default ModalProjeto;