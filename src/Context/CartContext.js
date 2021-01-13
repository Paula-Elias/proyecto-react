import React, { useState } from 'react';

export const CartContext = React.createContext([]);

 const CartContextProvider = (props) => {
     
            const [plantas, setPlantas] = useState([]); 
            //const [cantidad, setCantidad] = useState(); 

            function addItem(product, cantidad, precio) {
                setPlantas([...plantas,  {nombre: product, cantidad: cantidad, precio: precio} ] )
            }

            const plantasContador = () => {
                return plantas.reduce((acc, p) => (acc += p.cantidad), 0);
              };

              const eliminaPlantas = id => {
                plantas.splice(plantas.findIndex(p => p.id === id), 1);
                setPlantas([...plantas]);
              };
            
              const totalPlantas = (e) => {
                return plantas.reduce((acc, p) => (acc += p.precio * p.cantidad), 0);
              };


              return (
                <CartContext.Provider
                  value={[plantas, plantasContador, addItem, eliminaPlantas, totalPlantas]}
                >
                  {props.children}
                </CartContext.Provider>
              );
}

export default CartContextProvider;