import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';

const Header = () => {

    const history = useHistory();

    const handleLogin = () => {
        history.push('/login');
    }

    const goToDashboard = () => {
        history.push('/dashboard');
    }

    const [user] = useContext(userContext);
    const {name, email, photo} = user;

    return (
        <Container>
            <Navbar expand="lg">
                <Link to="/"><h5 className='navbar-brand'>Unique Riders</h5></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className='ml-lg-3 p-2 nav-link active' to="/home">Home</Link>
                        <Link className='ml-lg-3 p-2 nav-link' to="/destination">Destination</Link>
                        <Link className='ml-lg-3 p-2 nav-link' to="/blog">Blog</Link>
                        <Link className='ml-lg-3 p-2 nav-link' to="/contact">Contact</Link>
                        {email ?
                        photo ? <img src={photo} className='user-logo ml-2 ml-lg-3  mt-3 mt-lg-0' onClick={goToDashboard} alt=""/> :
                        <h6 onClick={goToDashboard} className='p-2 ml-lg-3 user-name'>{name || email}</h6> :
                        <Button onClick={handleLogin} className='px-4 ml-lg-3' variant="success">Login</Button>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;