import React from 'react'; 

function ItemList() {

    setTimeout(() => {
        console.log("Cargando base de datos...")
       }, 2000);

     return (
            <div> 
                <h3> Esperando... </h3>
            </div> 
    )
};

export default ItemList; 