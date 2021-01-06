import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import '../Items/ItemCount.css'; 


function Contador() {

  const [count, setCount] = useState(0)
  
useEffect(()=>{
  if(count < 0){
    setCount(0)
  }else{
    if(count > 5){
      setCount(5)
    }
  }
},[count]) 

function add() {
  setCount(count);
  console.log(count)
}

  return(
    <div>
    
    <input disabled={count === 5 ?  true : false} type="button" value="Agregar" onClick={()=>setCount(count+1)}/>
    {count}
    <input disabled={count === 0 ?  true : false} type="button" value="Eliminar" onClick={()=>setCount(count-1)}/>

    <Link to="/carrito"><button onClick={add}> Agregar al carrito </button>   </Link>
  
    </div>
    )
  }

export default Contador; 
