import React from 'react'; 
import Contador from '../Items/ItemCount'; 
import '../Items/ItemCount.css';
import ItemList from '../Items/ItemList';
import Item from '../Items/Item'; 

function ItemListContainer(props) {
    return (
            <div>
                <h5>
                    Bienvenido {props.nombre} a nuestra exclusiva tienda de naturaleza viva
                </h5>
                <h6>Esperamos que disfrutes todo lo que tenemos preparado para vos y tus espacios</h6>
                <hr></hr>
                
                <ItemList />
                </div>
    )
   
}



export default ItemListContainer; 