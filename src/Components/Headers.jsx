import React, { Component } from 'react';
import logo from '../logo.svg';


export default class Headers extends Component {
    render() {
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Hello</h1>
            </header>
        )
    }
};