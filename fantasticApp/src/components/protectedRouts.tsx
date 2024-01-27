import { Route,  } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Spinner from './spinner';
import Redirect from './redirect';
import { fetchUser } from '../api/user';

const ProtectedRoutes = ({ component: Component, ...rest }: any) => {
    const { data: user, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: fetchUser,
    });

    if (isLoading) {
        // Mostrar un spinner de carga mientras se obtiene la información del usuario
        return <Spinner />;
    }

    if (isError || !user) {
        // Redirigir al usuario a la página de inicio de sesión si no está autenticado
        
        return <Redirect to="/login" />;
    }

    return (
        <Route
            {...rest}
            render={(props: JSX.IntrinsicAttributes) => (
                <Component {...props} />
            )}
        />
    );
};

export default ProtectedRoutes;
