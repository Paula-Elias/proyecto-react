import React,  { useState, useContext } from 'react'; 
import { Link } from 'react-router-dom'; 
import Contador from '../contador/ItemCount';
import  { CartContext } from '../../Context/CartContext'; 


export default function ItemDetail(props) {

  const [count, setCount] = useState(0);
  const [plantas, plantasContador, addItem, eliminaPlantas, totalPlantas] =  
  useContext(CartContext); 

  function giveMeCount(c) {
    setCount(c);
  }


    return(
      <div>
        <h3>Tu Selección de Carrito es: </h3>
       <h4> {props.nombre} </h4>
       <img src={props.img} /> 
        <h3> Precio: ${props.precio}</h3>
        <h6>Comentarios de clientes: {props.comentario}</h6>
        
        <Contador func={giveMeCount} />
        <Link to="/carrito"> <input onClick={()=>addItem(props.nombre, count)} type="button" value={`Añadir al carrito ${count}`}/>  </Link>
        <hr></hr>
     
      </div>
    ) 
}
