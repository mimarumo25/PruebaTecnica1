import React from 'react';
import { Nav,Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';



export const Navbar = () => {
    return (
        <div>
            <Container>
                <Nav className="justify-content-center bg-dark">
                <Link className="link" to="">Inicio</Link>
                <Link className="link" to="/Registro">Registro</Link>
                <Link className="link" to="/Listar">Listado</Link>
                </Nav>
                <hr />
            </Container>
        </div>
    )
}