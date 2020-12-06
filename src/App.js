import React, { Component } from 'react';
import Headers from './Components/Headers';
import './App.css';
import Parag from './Components/Parag';

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
    return (
      <div className="App">
        <Headers miau={ miau } manejaClick={ this.manejaClick } />
        <Parag>
            { miau }
        </Parag>
      </div>
    )
  } 
}



export default App
