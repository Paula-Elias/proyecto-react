import React from 'react'; 
import Contador from './ItemCount';


export default function ItemDetail(props) {

    return(
      <div>
        <h3>Tu Selección de Carrito es: </h3>
     
       <h4> {props.nombre} </h4>
       <img src={props.img} /> 
        <h4>{props.nombre}</h4>
        <h3>${props.precio}</h3>
        <h6>Comentarios de clientes: {props.comentario}</h6>


        <Contador />
        <button>Comprar</button>
        <hr></hr>
     
      </div>
    ) 
}
