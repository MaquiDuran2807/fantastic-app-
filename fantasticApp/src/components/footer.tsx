import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container-fluid">
                <p>
                    Desarrollado por el Departamento de Salud Pública y Colectivos de la Universidad Nacional de Colombia
                </p>
                <p>
                    Contáctenos: <a href="mailto:contacto@example.com">contacto@example.com</a>
                </p>
                <form>
                    <div className="form-group">
                        <label htmlFor="message">Envíenos un mensaje:</label>
                        <textarea className="form-control" id="message" rows={3}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
