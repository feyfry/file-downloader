import PropTypes from 'prop-types';
import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = ({ setActiveMenu }) => {
    const [activeLink, setActiveLink] = useState('frontend');

    const handleNavClick = (menu) => {
        setActiveLink(menu);
        setActiveMenu(menu);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">VesperLoad</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            onClick={() => handleNavClick('frontend')}
                            className={activeLink === 'frontend' ? 'active' : ''}
                        >
                            Halaman Frontend
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => handleNavClick('admin')}
                            className={activeLink === 'admin' ? 'active' : ''}
                        >
                            Panel Admin
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

// Validasi props
NavigationBar.propTypes = {
    setActiveMenu: PropTypes.func.isRequired,
};

export default NavigationBar;
