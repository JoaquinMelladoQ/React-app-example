import React, { Component } from 'react'

export default class Parag extends Component {
    render() {
        const { children } = this.props
        return (
            <div>
                <p onClick={ this.cambiarTextoDelEstado }  className="App-intro">
                    { children }
                </p>
            </div>
        )
    }
}
