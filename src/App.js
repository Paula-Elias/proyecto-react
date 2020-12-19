import React from 'react'; 
import './App.css';
import Navbar from './component/Navbar'; 
import Footer from './component/Footer';
import ItemListContainer from './component/Items/ItemlistContainer'; 
import ItemDetailContainer from './component/Items/ItemDetailContainer'; 


function App() {
  return (
    <div className="App">
      <Navbar />

      <ItemListContainer nombre="Sebastian" /> 

      <ItemDetailContainer />
      

      <Footer />
    
    </div>
  );
}

export default App;
