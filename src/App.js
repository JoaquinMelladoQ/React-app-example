import React, { Component } from 'react';
import Headers from './Components/Headers';
import './App.css';

class App extends Component {

  state = {
    miau: 'Bienvenido a miau'
  }

  cambiarTextoDelEstado = () => {
    this.setState({ miau: 'Hola mundo' })
  }

  manejaClick = texto => {
    console.log(texto)
  }
  render() {
    const { miau } = this.state
    const texto = 'Welcome Miau'
    return (
      <div className="App">
        <Headers miau={ texto } manejaClick={ this.manejaClick } />
        <p onClick={ this.cambiarTextoDelEstado }  className="App-intro">
          { miau }
        </p>
      </div>
    )
  } 
}



export default App
