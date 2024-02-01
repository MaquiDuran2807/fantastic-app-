import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLogoutMutation } from '../api/user';
import Redirect from './redirect';
import { useAuth } from '../auth/auth';

const CustomNavbar: React.FC = () => {
    const logout = useLogoutMutation();
    const auth = useAuth();
    const handleLogout = async () => {
        await logout.mutate();
        console.log("intermedio");
        
        await auth.logout();
        return <Redirect to="/" />;
    };
    useEffect(() => {
        if (logout.isSuccess) {
            
        }
    }, [logout.isSuccess]);
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">
                Fantastic App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/about">
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to="/take-test">
                        Take Test
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login">
                        Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="/register">
                        Register
                    </Nav.Link>
                    <Nav.Link as={Link} to="/" onClick={handleLogout}>
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;

