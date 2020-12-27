import React,  {useState, useEffect} from 'react'; 
import ItemDetail from './ItemDetail'; 

export default function ItemDetailContainer(props) {

    const [item, setItem] = useState(false);
    let id = props.match.params.id;

    useEffect(() => {
            setTimeout(() =>  {
                fetch(`data.json/${id}`)
                .then(response =>  {
                    return response.json();
                })
                .then(data =>  {
                    setItem(data)
                })
            }, 1000);
            console.log(item);
             
    }, []); 
   
    return (
        <div> 
            {item ?  ( <ItemDetail nombre={props.nombre} precio= {props.precio} 
             id={props.id} img src={props.img}  />) : 
            ( <p>Trayendo información desde base de datos ...</p>)
            } 
         </div>
       
    );   
  
}
