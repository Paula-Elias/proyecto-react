import React from 'react'; 
import './Item.css';

class Item extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            image: '',
            rating: 1,
            stars: []
        };    
     }

     componentDidMount() {
         this.setState(  {
             stars: Array(parseInt(this.props.rating)).fill(0)
         }); 
     }

     render() {
        return (
        <div className="item">
        <div className="image"><img src={'img/' + this.props.image} alt="" width="100%" /></div>
        <div className="title">{this.state.title}</div>
        <div className="rating">
            <p> {
                this.state.stars.map(x => 
                <img src="img/star.png" alt="" width="32" /> )
                  }
           
            </p>
            Calificación: 
            <select value={this.state.rating}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        <div className="actions">
            <button>Eliminar</button>
        </div>
    </div>  

    );
}
}   

export default Item; 