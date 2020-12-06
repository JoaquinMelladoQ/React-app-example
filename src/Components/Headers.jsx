import React, { Component } from 'react';
import logo from '../logo.svg';


export default class Headers extends Component {
    render() {
        const { miau, manejaClick } = this.props
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 onClick={ manejaClick } className="App-title">{ miau }</h1>
            </header>
        )
    }
}