import { Outlet } from 'react-router-dom';
import Redirect from './redirect';
import { useAuth } from '../auth/auth';

const ProtectedRoutes = () => {
    const auth = useAuth() 
    return (
        <>
            {auth.isTokenValid ? <Outlet /> : <Redirect to="/login" />}
        </>
    );
};
  
  export default ProtectedRoutes;