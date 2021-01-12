import React,  { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import Contador from '../contador/ItemCount';


export default function ItemDetail(props) {

  const [count, setCount] = useState(0);

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
        <Link to="/carrito"><input type="button" value={`Agregar al carrito: ${count}`} /></Link>
        <hr></hr>
     
      </div>
    ) 
}
