import React,  {useState, useEffect} from 'react'; 
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap';


function ItemList(props) {

    const [items, setItems] = useState(false);

    useEffect(()=>{
      setTimeout(()=> {
        fetch(`https://demo8880263.mockable.io/plantas`)
          .then((response)=> {
            return response.json();
          })
          .then((data)=>{
            setItems(data);
          });
      }, 3000);
    },[]) 
    console.log(items);

    return(
      <div className="container-fluid d-flex">
        <div className="row justify-content-around col-md-auto"> 
                      {
                        items ? 
                        items.map((i,index)=>(
                          <Item key={index} nombre={i.nombre} precio={i.precio}
                          tipo={i.tipo} img={i.img} id={i.id} comentario={i.comentario}/>
                        ) ) 
                        : 
                        <p>  <Spinner animation="border" variant="success" /> Cargando...</p>}
        </div>
      </div>
    )
};

export default ItemList; 