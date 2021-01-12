import React,  { useState, useEffect, useContext } from 'react'; 
import { Link } from "react-router-dom";
import  { CartContext } from '../../Context/CartContext'; 

function Cart() {
    const [longitud, cart, Carrito, eliminar, total] =  useContext(CartContext); 

    const [item, setItem] = useState(false);
    /* let id = props.match.params.id; */
    
  
    return (
        <>
          <p>info que viene desde detail pasa por context y llega aca : </p>
          <p>id: [{cart}]</p>
          <p>quantity: {longitud}</p>
          <input type="button" value="carrito" onChange={(e)=>Carrito(e.target.value)} />
          <input type="button" value={'eliminar'}
           onClick={(e)=>eliminar(e.target.value)}/>
          <Link to="/">volver</Link>
        </>
      );
} 

export default Cart; 