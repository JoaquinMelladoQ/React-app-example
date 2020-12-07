import React, { Component } from 'react';
import FormularioSimple from './Components/FormularioSimple'

class App extends Component {
  constructor(){
    super()
    console.log('ajax con fetch ')
  }

  render() {
    return (
      <div className="App">
        <FormularioSimple  />
      </div>
    )
  } 
}



export default App
