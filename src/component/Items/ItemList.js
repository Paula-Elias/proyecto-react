import React,  {useState, useEffect} from 'react'; 
import Item from './Item';


function ItemList(props) {

    const [items, setItems] = useState(false);

    useEffect(()=>{
      setTimeout(()=> {
        fetch("https://5fdd034948321c00170125e4.mockapi.io/api/v1/plantas")
          .then((response)=> {
            return response.json();
          })
          .then((data)=>{
            setItems(data);
          });
      }, 3000);
    },[]) //Esto se ejecuta apenas se monta el componente / onInit
    
    return(
      <div>
      {items ? 
      items.map((i,index)=>(
        <Item key={index} nombre={i.nombre} precio={i.precio} tipo={i.tipo}/>
      ) ) 
      : 
      <p>Trayendo información desde base de datos...</p>}
      
      </div>
    )
};

export default ItemList; 