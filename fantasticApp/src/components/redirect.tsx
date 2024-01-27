import React from 'react';

interface RedirectProps {
    to: string;
}

const Redirect: React.FC<RedirectProps> = ({ to }) => {
    React.useEffect(() => {
        window.location.href = to;
    }, [to]);

    return null;
};

export default Redirect;
