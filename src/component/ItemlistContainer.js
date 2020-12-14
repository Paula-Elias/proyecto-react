import React from 'react'; 
import Contador from './ItemCount'; 
import './ItemCount.css';

class ItemListContainer extends React.Component {

   /*  constructor(props) {
        super(props); 
    } */

    render() {
        
        const {titulo} = this.props; 

       return(
        <div className="container">
            <Contador className="contador" /> 
            <h2>{titulo}</h2>
        </div>
        )  
    }; 

    
   
}

export default ItemListContainer; 