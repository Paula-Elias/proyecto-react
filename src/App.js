import React from 'react'; 
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
import './App.css';
import Navbar from './component/Navbar'; 
import Footer from './component/Footer';
import ItemListContainer from './component/Items/ItemlistContainer'; 
import ItemDetailContainer from './component/Items/ItemDetailContainer'; 



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/" component={ItemListContainer}/>
      <Route path='/itemdetail/:id' component={ItemDetailContainer}/>
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
