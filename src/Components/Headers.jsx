import React, { Component } from 'react';
import logo from '../logo.svg';


const styles = {
    header: ({ backgroundColor }) => ({
        backgroundColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    })
}

export default class Headers extends Component {

    state = {
        backgroundColor: '#282c34'
    }

    cambiarColorHeader = () => {
        this.setState({ backgroundColor: '#555' })
    }

    manejaClick = () => {
        const { manejaClick, miau } = this.props
        manejaClick(miau)
    }

    render() {
        const { miau, manejaClick } = this.props
        const { backgroundColor } = this.state
        return(
            <header onClick={ this.cambiarColorHeader }  style={styles.header({ backgroundColor })}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 onClick={ this.manejaClick } className="App-title">{ miau }</h1>
            </header>
        )
    }
}