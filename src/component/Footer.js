import React from 'react';


class Footer extends React.Component {

  render() {

    return (

        <footer>
            <p className="float-right"><a href="http://localhost:3000/">Subir</a></p>
            <p>&copy; 2020 Mi Proyecto, Inc. &middot; <a href="http://localhost:3000/">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
        </footer>

    )
    
  }

}

export default Footer;