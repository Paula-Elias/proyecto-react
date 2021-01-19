import React,  {useState, useEffect} from 'react'; 
import ItemDetail from './ItemDetail'; 
import "firebase/firestore";
import {Spinner} from 'react-bootstrap'; 
import {getFirestore} from './../../firebase/firebase'; 


export default function ItemDetailContainer(props) {

    const [item, setItem] = useState(false);
    let id = props.match.params.id;

    
  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = db.collection("items") 
    const planta = itemsCollection.doc(id)

    planta
    .get()
    .then((snapshot) => {
        const data = snapshot.data()
        setItem(data)
      })
      
     /* .catch((err) =>  {
      console.log(err)
    }) */
    }, [])
/*     console.log(item.id)
 */
    return (
        <div>  
            {item ?  ( <ItemDetail nombre={item.nombre} precio= {item.precio} 
              img={item.img} comentario={item.comentario} />) : 
            ( <p>  <Spinner animation="border" variant="success" /> Cargando...</p>)
            } 
           
         </div>
       
    );   
  
}

 /*    useEffect(() => {
            setTimeout(() =>  {
                fetch(`https://demo8880263.mockable.io/plantas`)
                .then(response =>  {
                    return response.json();
                })
                .then(data =>  {    
                    setItem(data[id])
                   
                })
            }, 1000)
    }, []);  */
