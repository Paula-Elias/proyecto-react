import React from 'react'; 

class ItemListContainer extends React.Component {

   /*  constructor(props) {
        super(props); 
    } */

    render() {

        const {titulo} = this.props; 

       return(
        <div className="container">
            <h2>{titulo}</h2>
        </div>
        )  
    }    
}

export default ItemListContainer; 