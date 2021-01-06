import React,  { useState } from 'react'; 
import Contador from './ItemCount'; 




function Cart(props) {

  const [count, setCount] = useState(0);
  function giveMeCount(c) {
    setCount(c);
  }

   return ( 
       <div>
            <h3> Terminar compra de: {props.nombre} </h3>
            
            <input type="button" func={giveMeCount} value={`Comprar ${count}`} />
        </div> 
   
   )
} 

export default Cart; 