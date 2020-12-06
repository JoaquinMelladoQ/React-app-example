import React, { Component } from 'react';
import Headers from './Components/Headers';
import './App.css';

class App extends Component {
  manejaClick = () => {
    console.log('he sido clickeado!!!!!')
  }
  render() {
    const miau = 'Welcome Miau'
    return (
      <div className="App">
        <Headers miau={ miau } manejaClick={ this.manejaClick } />
      </div>
    )
  } 
}



export default App
