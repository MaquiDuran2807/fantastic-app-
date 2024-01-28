import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Spinner from './spinner';
import Redirect from './redirect';
import { fetchUser } from '../api/user';

const ProtectedRoutes = () => {

    const token:string |null = localStorage.getItem('token');
    console.log(token, 'token aqui estoy en protectedRoutes');
    if (!token) {
        return <Redirect to="/login" />;
    }
    const { data: user, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetchUser(token),

    });
    console.log(user, 'user aqui estoy en protectedRoutes');
    
    if (isLoading) {
        // Mostrar un spinner de carga mientras se obtiene la información del usuario
        return <Spinner />;
    }

    if (isError || !user) {
        // Redirigir al usuario a la página de inicio de sesión si no está autenticado
        
        return <Redirect to="/login" />;
    }

    return (
        <Outlet/>
    );
};

export default ProtectedRoutes;
