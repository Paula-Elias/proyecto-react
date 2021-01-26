import React from 'react'; 



function CategoriasListContainer() {
    return (
        <div>
            <h3> Aqui va la lista de categorias </h3>
        </div>
    )
    
        
    /* const [items, setItems] = useState([])
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const items = db.collection("items")
        const familia = items.where('familia', '==', 'kokedamas')

        familia
        .get()
        .then((snapshot) =>  {
            const data = snapshot.docs.map((doc) => ( {
                id: doc.id, 
                ...doc.data(),
            })); 
            /* console.log("--------------", data); */
           /*  setItems(data)
            setLoading(false)
        })

    }, [])

   
        if(items.length > 0) {
        return items.map((p, i) => (
            p.familia != 'kokedamas' ?
            <div /* className="container-fluid d-flex"> */ 
               /*  <div className="container-fluid   ">
              <Item key={i} id={p.id} img={p.img} nombre={p.nombre} precio= {p.precio} familia= {p.familia}  />
               </div>
            </div>
            :
            <div key= {{i}}>

            </div>
        ));
    }    

    return <div style={{textAlign: 'left', marginLeft: '5vw'}}>
    'Loading...'
</div> 
*/ 
   
} 

export default CategoriasListContainer; 
