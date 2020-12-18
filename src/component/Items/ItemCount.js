import React, { useState, useEffect } from "react";
import '../Items/ItemCount.css';


function Contador() {

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
        <input disabled={count === 5 ?  true : false}
          onClick={() => ItemCount()}
          type="button"
          value="Sumar un item"
        />
        <input disabled={count === 0 ?  true : false}
          onClick={() => eliminar()}
          type="button"
          value="eliminar un item"
        />
      </div>
    );
  }

export default Contador; 
