import React, {useContext} from 'react';
 import './CartWidget.css'; 
 import  { CartContext } from '../../Context/CartContext'; 
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


function CartWidget() {

    const   [{plantasContador}]= useContext(CartContext)

    return ( 
        <div className="cart">
            <Link to="/carrito" className="cart"  > 
        <FontAwesomeIcon icon={faShoppingCart}/>  
               <span>  {()=>plantasContador} </span>     
            </Link>    
          </div> 
    
    )
} 

export default CartWidget; 