import { useEffect } from "react";
import "./ModalCertificado.css";

const ModalCertificado = ({imageSrc, onClose}) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);
    useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
        document.body.style.overflow = 'unset';
    };
    }, []);
    return (
        <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imageSrc} alt="Certificado" />
            </div>
        </div>
    )
}

export default ModalCertificado;