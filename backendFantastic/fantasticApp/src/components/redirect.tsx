import React from 'react';
import { useNavigate } from 'react-router-dom';

interface RedirectProps {
    to: string;
}

const Redirect: React.FC<RedirectProps> = ({ to }) => {
    console.log(to, 'to aqui estoy en redirect');

    const navigate = useNavigate();
    const redireccionar = () => {
        console.log("redireccionando");
        
        navigate(to);
    }

    
    React.useEffect(() => {
        redireccionar();
    }, [to]);

    return null;
};

export default Redirect;
