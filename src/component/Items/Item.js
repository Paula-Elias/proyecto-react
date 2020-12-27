import React from 'react'; 
import { Link } from "react-router-dom"; 

function Item(props){

  return (
    <div>
       <Link
          to={{ pathname: `/itemdetail/${props.id}`, state: { test: "test" } }}
        > </Link>
    
      <h5>{props.nombre}</h5>
    <img src={props.img} />
    <li>Precio: $ {props.precio}</li>
    <li>Categoría: {props.tipo}</li>
  <hr></hr>
</div>
  )
  
}

export default Item; 