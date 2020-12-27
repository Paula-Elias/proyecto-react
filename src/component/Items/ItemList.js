import React,  {useState, useEffect} from 'react'; 
import Item from './Item';


function ItemList(props) {

    const [items, setItems] = useState(false);

    useEffect(()=>{
      setTimeout(()=> {
        fetch(`data.json`)
          .then((response)=> {
            return response.json();
          })
          .then((data)=>{
            setItems(data);
          });
      }, 3000);
    },[]) //Esto se ejecuta apenas se monta el componente / onInit
    console.log(items);

    return(
      <div>
      {
      items ? 
      items.map((i,index)=>(
        <Item key={index} nombre={i.nombre} precio={i.precio}
         tipo={i.tipo} img={i.img} />
      ) ) 
      : 
      <p>Trayendo información desde base de datos...</p>}
      
      </div>
    )
};

export default ItemList; 