import React,  {useState, useEffect} from 'react'; 
import ItemDetail from './ItemDetail'; 

export default function ItemDetailContainer(props) {

    const [item, setItem] = useState(false);
    let id = props.match.params.id;
    
    useEffect(() => {
            setTimeout(() =>  {
                fetch(`https://demo8880263.mockable.io/plantas`)
                .then(response =>  {
                    return response.json();
                })
                .then(data =>  {    
                    setItem(data[id])
                   
                })
            }, 1000)
    }, []); 

    console.log(item);

    return (
        <div>  
            {item ?  ( <ItemDetail nombre={item.nombre} precio= {item.precio} 
             id={item.id} img={item.img} comentario={item.comentario} />) : 
            ( <p>Cargando...</p>)
            } 
           
         </div>
       
    );   
  
}
