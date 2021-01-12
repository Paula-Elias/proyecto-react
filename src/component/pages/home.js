

import React from 'react';
import { Link } from 'react-router-dom';
/* import ItemListContainer from '../Items/ItemlistContainer'; 
 */

function home(props) {
    return (
        <div>
            <h3>
                    Bienvenido {props.nombre} a nuestra exclusiva tienda de naturaleza viva
                </h3>
            <br></br>
            <button><Link
          to={{ pathname: /ItemlistContainer/ }}
        > LIstado de articulos   </Link>  </button>
      
        <hr></hr>
        </div>
    )
}

export default home
