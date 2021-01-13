import React,  { useState, useEffect, useContext } from 'react'; 
import { Link } from "react-router-dom";
import  { CartContext } from '../../Context/CartContext'; 

function Cart() {
    const [plantas, eliminaPlantas, totalPlantas] =  useContext(CartContext); 

    //const [item, setItem] = useState(false);
    /* let id = props.match.params.id; */
    
    useEffect(()=>{
        console.log(plantas)
      })
  
    return (
        <div>

        {plantas.map((planta) => (
          <div>
          <hr></hr>
            <p>Producto: {planta.nombre}</p>
            <p>Cantidad: {planta.cantidad}</p>
            <p>Precio:  ${planta.precio}</p>
            <hr></hr>
           
          </div>
        ))}
            <input type="button" value={'eliminar'}
            onClick={(e)=>eliminaPlantas(e.target.value)}/>
            <input type="button" value={'Total'}
            onClick={(e)=>totalPlantas(e.target.value)}/>
            <Link to="/ItemlistContainer/">volver</Link>
{/* 
          <p>info que viene desde detail pasa por context y llega aca : </p>
        {/*   <p>id: [{cart}]</p>
          <p>quantity: {longitud}</p>
          <input type="button" value="carrito" onChange={(e)=>Carrito(e.target.value)} /> */}
           
        </div>
      );
} 

export default Cart; 