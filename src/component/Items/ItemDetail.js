import React,  {useState, useEffect} from 'react'; 


export default function ItemDetail(props) {
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
        <h4> Esta es tu elección en el carrito: </h4>
        <h6>{props.nombre}</h6>
        <p>${props.precio}</p>
        <input disabled={count === 5 ?  true : false} type="button" value="Agregar" onClick={()=>setCount(count+1)}/>
        {count}
        <input disabled={count === 0 ?  true : false} type="button" value="Eliminar" onClick={()=>setCount(count-1)}/> 
        <br></br>
        <button>Comprar</button>
        <hr></hr>
        </div>
        )

}