import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Menubar.css'

const Menubar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Navbar className="d-flex justify-content-between menu-bar" variant="dark" expand="lg">
                <Navbar.Brand style={{color:'#79B530'}} as={Link} to="/"><strong>Travel valley</strong></Navbar.Brand>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto align-items-end">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            {loggedInUser.email && <Nav.Link className="ml-4" as={Link} to="/dashboard">Dashboard</Nav.Link>}
                            <Nav.Link className="ml-4" as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className="ml-4" as={Link} to="/travel-guide">Travel Guide</Nav.Link>
                            <Nav.Link className="ml-4" as={Link} to="/feature">Feature</Nav.Link>
                            {loggedInUser.isSignedIn ? <Nav.Link className="ml-4" ><strong className="brand-text">{loggedInUser.name}</strong></Nav.Link> :
                                <Button className="color-btn ml-4" as={Link} to="/login" variant="primary">Login</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Menubar;