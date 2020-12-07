import React, { Component } from 'react'
import Parag from './Parag'


export default class FormularioSimple extends Component {

    state = {
        errors: {
            nombre: 'campo obligatorio'
        }
    }

    handleChange = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault() 
        console.log('prevenido!', this.state)
    }

    render() {
        const { errors } = this.state
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit} >
                <input name="nombre" onChange={this.handleChange} />
                    {errors.nombre && <Parag>{errors.nombre}</Parag>}
                <input name="apellido" onChange={this.handleChange} />
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}