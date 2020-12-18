import React from 'react'; 
import Contador from '../Items/ItemCount'; 
import '../Items/ItemCount.css';
import ItemList from '../Items/ItemList';

class ItemListContainer extends React.Component {

     constructor(props) {
        super(props); 

        this.state = {
            articulos: ['Kokedamas', 'Plantas Ornamentales',  'Paisajismo',  'Cuadros Vivos']
        }
    } 
    

    render() {
         const {titulo} = this.props;  
         const resultado =     
        <ul className="list-group"> 
         {
         this.state.articulos.map((articulo, index) =>  {
             return (
               <li className="list-group-item" key={`item-${index}`} > {articulo} </li>     
             )
          }      
      )  
   }   
      </ul>

       return(
        <div className="container">
            <Contador className="contador" /> 
            <h2>{titulo}</h2> 
            <h3>{resultado}</h3>
            <ItemList /> 
        </div>
        )  
    }; 
}

export default ItemListContainer; 