 import React from 'react'; 
 import '../Items/CartWidget.css'; 
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function Cart(props) {
    return (
        <div className="cart">
            <h3>Has agregado ${props.nombre} </h3>
        <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    )
} 

export default Cart; 