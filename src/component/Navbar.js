import React from 'react'; 
import './Navbar.css'; 

function Navbar(cholo) {
    const {title} = cholo; 
        console.log(title);
    return(
        <div className="navbar">
            <a href="www.google.com">Inicio</a>
            <a href="www.google.com">Nosotros</a>
            <a href="www.google.com">Carrito</a>
            <a href="www.google.com">Tienda</a>
        </div>
    ); 
}

export default Navbar; 