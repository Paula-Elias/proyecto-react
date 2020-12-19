import React, { useState, useEffect } from "react";
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

  return(
    <div>
    <h6>Este es el ItemCount</h6>
    <input disabled={count === 5 ?  true : false} type="button" value="Agregar" onClick={()=>setCount(count+1)}/>
    {count}
    <input disabled={count === 0 ?  true : false} type="button" value="Eliminar" onClick={()=>setCount(count-1)}/>
    </div>
    )
  }

export default Contador; 
