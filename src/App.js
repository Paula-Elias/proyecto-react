import React from 'react'; 
import './App.css';
import Navbar from './component/Navbar'; 
import Footer from './component/Footer';
import ItemListContainer from './component/ItemlistContainer'; 


function App() {
  return (
    <div className="App">
      <Navbar />

      <ItemListContainer titulo="Esta es mi futura lista de items" /> 
      

      <Footer />
    
    </div>
  );
}

export default App;
