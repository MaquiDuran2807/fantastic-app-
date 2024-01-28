import React, { useEffect } from 'react';
import { useSigninMutation} from '../api/user';
import {  useState } from 'react'
import Redirect from '../components/redirect';
import { tokens } from '../types/UserInfo';


const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState<tokens|null>(null)
    const { mutateAsync: signin } = useSigninMutation()
    const redireccionar = () => {
        if (data) {
            console.log("redireccionando");
            
            return <Redirect to="/dashboard" />;
        }
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            console.log(email, password);
            
            const dataTokens =await signin({ email, password })
            console.log(dataTokens);
            if (dataTokens) {
                setData(dataTokens)
                redireccionar();
            }
        } catch (error) {
            console.log(error)
        }
        
        useEffect(() => {
            console.log(data, 'data aqui estoy en useEffect');
            
            redireccionar();
        }, [data])
    };
    return (
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
    );
};

export default Login;
