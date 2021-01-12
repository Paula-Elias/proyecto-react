import React from 'react'; 
import './Navbar.css'; 
import CartWidget from './CartWidget'; 


class Navbar extends React.Component {

    render() {
  
        return (
  
            <nav className="navbar navbar-expand-md">
 
		    <a className="navbar-brand" href="/">Hijas Del Monte</a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">
			        <li className="nav-item active">
			          	<a className="nav-link" href="https://www.google.com/">Inicio <span className="sr-only">(current)</span></a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="https://www.google.com/">Nosotros</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="https://www.google.com/">Tienda</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="https://www.google.com/">Carrito</a>
			        </li>
			    </ul>

				<CartWidget />
		    </div>
 
		</nav>
        )  
    }
  }

export default Navbar; 