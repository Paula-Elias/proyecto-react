 import React from 'react'; 
 import '../Items/CartWidget.css'; 
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function CartWidget() {
    return ( 
        <div className="cart">
        <FontAwesomeIcon icon={faShoppingCart}/>  
          </div> 
    
    )
} 

export default CartWidget; 