import React, { Component } from 'react';
import FormularioSimple from './Components/FormularioSimple'

class App extends Component {
  constructor(){
    super()
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(x => x.json())
      .then(x => console.log(x))
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
