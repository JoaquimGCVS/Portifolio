import { useEffect } from "react";
import "./ModalProjeto.css";
import { IoMdClose } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const ModalProjeto = ({ projeto, onClose, linkSite, linkGithub, responsivo }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-conteudo" onClick={e => e.stopPropagation()}>
                <div className="projeto-conteudo">
                    <div className="video-links">
                        <video controls>
                            <source src={projeto.video} type="video/mp4" />
                            Seu navegador não suporta vídeos HTML5.
                        </video>
                        <div className="h3-links">
                            <h3>Disponível em: </h3>
                            <div className="links">
                                <a href={linkSite} target="_blank"><TbWorld size={20} /> Site</a>
                                <a href={linkGithub} target="_blank"><FaGithub size={20} /> Código</a>
                            </div>
                        </div>
                        {responsivo && (
                            <p className="responsivo-aviso">
                                100% Responsivo < MdVerified />
                            </p>
                        )}
                    </div>
                    <div className="texto-modal">
                        <h3>{projeto.titulo}</h3>
                        <p>{projeto.desc1}</p>
                        <p>{projeto.desc2}</p>
                        <p>{projeto.desc3}</p>
                        <p>{projeto.desc4}</p>
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