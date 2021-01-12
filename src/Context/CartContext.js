import React, { useState } from 'react';

export const CartContext = React.createContext([]);

 const CartContextProvider = (props) => {

    const [cart, setCarrito] = useState([]); //State para manejar el carrito
    const [longitud, setLongitud] = useState(0); //state para manejar la cantidad
    const [total, setTotal]= useState(0);  //para manejar el total de la compra 

        //funcion encargada de agregar compras al carrito (asociada al botón de "agregar al carrito/comprar")
     function Carrito(cantidad, name, id, precio) {
        setLongitud (longitud + cantidad); //settear la cantidad de items a la cantidad de compra
        var subtotal = precio * cantidad; //es un subtotal de la multiplicacion del precio por la cantidad de de items comprados
        setTotal(total + subtotal);  //suma de todos los subtotales
        var marcacion = false;
        var Karriten = ([...cart]);

        if(Karriten.length > 0) {//si ya tengo un item en el carrito, examino si el que acabo de comprar tmb está
            for(let k in Karriten) {
                if(Karriten[k].id == id) {
                    Karriten[k].cantidad = Karriten[k].cantidad + cantidad;
                    Karriten[k].subtotal = Karriten[k].subtotal + subtotal;
                    setCarrito(Karriten)
                    marcacion = true; 
                }   
            }   
        }

        if(marcacion == false ){ //si la marcacion es verdadera, el item es nuevo y lo agrego acá 
            var compra = {cantidad, id, precio, subtotal}   
            var compras = ([...cart, compra]) //carrito con todo lo anterior y con la nueva compra
            setCarrito(compras);      
        }
    }

    function eliminar() {
        setTotal(0)
        setLongitud(0)
        setCarrito([])
    }



    return (
        <div>
            <CartContext.Provider value={[longitud, cart, Carrito, eliminar, total ]}  >  
             {props.children}
             </CartContext.Provider>       
        </div>
    )
}

export default CartContextProvider;