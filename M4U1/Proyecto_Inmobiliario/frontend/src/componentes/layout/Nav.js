import { Link } from "react-router-dom";
import React from 'react';

const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Nosotros">Nosotros</Link></li>
                <li><Link to="/Novedades">Novedades</Link></li>
                <li><Link to="/Galeria">Galeria</Link></li>
                <li><Link to="/Servicios">Servicios</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;