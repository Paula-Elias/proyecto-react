import React from 'react'; 
import Contador from './ItemCount';


export default function ItemDetail(props) {

    return(
      <div>
        <h3>Tu Selección de Carrito es: </h3>
     
       <h4> {props.nombre} </h4>
        <img src={props.img} />
        <h6>{props.nombre}</h6>
        <p>${props.precio}</p>

        <Contador />
        <button>Comprar</button>
        <hr></hr>
     
      </div>
    ) 
}
