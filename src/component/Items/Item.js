import React from 'react'; 

function Item(props){

  return (
    <div>
    <h5>{props.nombre}</h5>
    <li>Precio: $ {props.precio}</li>
    <li>Categoría: {props.tipo}</li>
  <hr></hr>
</div>
  )
  
}

export default Item; 