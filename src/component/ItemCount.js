import React, { useState } from "react";
import './ItemCount.css';


function Contador() {

    const nombre = "Remera Verde del S al XXl";
    const [count, setCount] = useState(1);
      
        function ItemCount() {
          setCount(count + 1);
        }
      
        function eliminar() {
          setCount(count - 1);
        }

        if (count < 0) {
          ItemCount();
        } else if(count > 5) {
          eliminar();
        }
      
        return (
          <div>
            <h1> Contador de Ecommerce</h1>
            <p>Contador: {count}</p>
            <p>Nombre: {nombre} </p>
            <input
              onClick={() => ItemCount()}
              type="button"
              value="Sumar un item"
            />
            <input
              onClick={() => eliminar()}
              type="button"
              value="eliminar un item"
            />
          </div>
        );
      }
    
   

export default Contador; 
