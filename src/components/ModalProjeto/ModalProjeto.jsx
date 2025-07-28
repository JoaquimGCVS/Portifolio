import { useEffect } from "react";
import "./ModalProjeto.css";
import { IoMdClose } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const ModalProjeto = ({ projeto, onClose, linkSite, linkGithub }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-conteudo" onClick={e => e.stopPropagation()}>
                <div className="projeto-conteudo">
                    <div className="video-links">
                        <iframe src={projeto.video} title={projeto.titulo} frameBorder="0" allowFullScreen />
                        <div className="links">
                            <h3>Disponível em: </h3>
                            <a href={linkSite} target="_blank"><TbWorld size={20}/> Site</a>
                            <a href={linkGithub} target="_blank"><FaGithub size={20}/> Código</a>
                        </div>
                    </div>
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