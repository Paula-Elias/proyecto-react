import React,  {useState, useEffect} from 'react'; 
import ItemDetail from './ItemDetail'; 

export default function ItemDetailContainer(props) {

    const [item, setItem] = useState(false);

    useEffect(() => {
            setTimeout(() =>  {
                fetch('https://5fdd034948321c00170125e4.mockapi.io/api/v1/plantas/2')
                .then(response =>  {
                    return response.json();
                })
                .then(data =>  {
                    setItem(data)
                })
            }, 2000);
            console.log(fetch); 
    }, []); 

    return (
        <div> 
            {item ?  ( <ItemDetail nombre={item.nombre} precio= {item.precio} />) : 
            ( <p>Trayendo información desde base de datos ...</p>)
            }
         </div>
    ); 
}