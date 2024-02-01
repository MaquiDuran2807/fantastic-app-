import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

interface RedirectProps {
    to: string;
}

const Redirect: React.FC<RedirectProps> = ({ to }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const redireccionar = () => {
        navigate(to, { replace: true,state: { from: location.pathname }});
        
    }

    
    React.useEffect(() => {
        redireccionar();
    }, [to]);

    return null;
};

export default Redirect;
