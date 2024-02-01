
import { useSigninMutation} from '../api/user';
import {  useState } from 'react'
import { tokens } from '../types/UserInfo';
import { Navigate } from 'react-router-dom';
import PagesLayout from '../lyouts/pagesLyout';
import { useAuth } from '../auth/auth';


const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState<tokens|null>(null)
    const { mutateAsync: signin } = useSigninMutation()
    const auth = useAuth()
    if (data) {
        return <Navigate to="/take-test" />;
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const dataTokens =await signin({ email, password })
            if (dataTokens) {
                await auth.validateToken();
                setData(dataTokens)
            }
        } catch (error) {
            console.log(error)
        }
        
    };
   
    return (
        <PagesLayout>
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email"  onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <div className="mt-3">
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    </PagesLayout>
    );
};

export default Login;
