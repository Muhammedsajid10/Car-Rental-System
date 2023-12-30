import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useHistory, useNavigate } from 'react-router-dom';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo && userInfo.token) {
            setIsLoggedIn(true);
            setUsername(userInfo.name);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        setIsLoggedIn(false);
        setUsername('');
        navigate('/');
    };

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">CarRental</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">Cars</Nav.Link>
                            <Nav.Link href="#action2">Contacts</Nav.Link>
                        </Nav>
                        <Nav>
                            {isLoggedIn ? (
                                <>
                                    <Button variant="outline-dark" disabled>
                                        {username}
                                    </Button>
                                    <Button variant="outline-dark" onClick={handleLogout} className="ms-2">
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link to="/singup">
                                        <Button variant="outline-dark">Sign Up</Button>
                                    </Link>
                                    <Link to="/login" className="ms-2">
                                        <Button variant="outline-dark">Login</Button>
                                    </Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Home;
