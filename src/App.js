import React, { Component } from 'react';
import FormularioSimple from './Components/FormularioSimple'

class App extends Component {
  constructor(){
    super()
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(x => x.json())
    //   .then(x => console.log(x))

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Joaquin Mellado',
        username: 'jom',
      })
    }).then(x => x.json())
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
