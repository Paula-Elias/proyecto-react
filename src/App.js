import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Navbar from './component/estaticos/Navbar'; 
import Footer from './component/estaticos/Footer';
/* import ItemListContainer from './component/Items/ItemlistContainer';  */
import ItemDetailContainer from './component/Items/ItemDetailContainer'; 
import Cart from './component/Items/Cart';
import Home from './component/pages/home';
import ItemList from './component/Items/ItemList';
import CartContextProvider from '../src/Context/CartContext'; 



function App() {
  return (
    <div className="App">
      <CartContextProvider> 
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home}  />
      <Route path="/ItemlistContainer/" component={ItemList}  />
      <Route path='/itemdetail/:id' component={ItemDetailContainer}/>
      <Route path='/carrito' component= {Cart} />
      </Switch>
      <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
