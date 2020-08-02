import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Duflix logo"></img>
            </a>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu; // export para poder importar depois