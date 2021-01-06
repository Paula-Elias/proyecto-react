import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Navbar from './component/Navbar'; 
import Footer from './component/Footer';
import ItemListContainer from './component/Items/ItemlistContainer'; 
import ItemDetailContainer from './component/Items/ItemDetailContainer'; 
import Cart from './component/Items/Cart';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/" component={ItemListContainer}/>
      <Route path='/itemdetail/:id' component={ItemDetailContainer}/>
      <Route path='/carrito' component= {Cart} />
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
