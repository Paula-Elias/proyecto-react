import { useState, useContext } from 'react'; 
import  { CartContext } from '../../Context/CartContext'; 
import Contador from '../contador/ItemCount';
import { Link } from 'react-router-dom';
import {getFirestore} from './../../firebase/firebase'; 



export default function ItemDetail(props) {

  const [count, setCount] = useState(0);
  const {plantas, plantasContador, addItem, eliminaPlantas, totalPlantas, eraser}  =  
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
          <input onClick={()=>addItem(props.nombre, props.precio, count)} type="button" value={`Añadir al carrito ${count}`}/>  
      <hr></hr>
       <Link to="/Carrito/">Ir al carrito</Link> 
       
       <Link to="/ItemlistContainer/">Seguir Comprando</Link> 
        
       <hr></hr>

     
      </div>
    ) 
}
