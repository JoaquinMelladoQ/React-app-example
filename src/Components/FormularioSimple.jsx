import React, { Component } from 'react'
import Parag from './Parag'


const validate = values => {
    const errors = {}
    if (!values.nombre) {
        errors.nombre = 'Este campo es obligatorio' 
    }
    if (!values.apellido) {
        errors.apellido = 'Este campo es obligatorio' 
    }

    return errors 
}
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
        const { errors, ...sinErrors } = this.state
        const result = validate(sinErrors)

        if (Object.keys(result).length) {
            return this.setState({ errors: result })
        }
    }

    render() {
        const { errors } = this.state
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit} >
                <input name="nombre" onChange={this.handleChange} />
                    {errors.nombre && <Parag>{errors.nombre}</Parag>} 
                <input name="apellido" onChange={this.handleChange} />
                    {errors.apellido && <Parag>{errors.apellido}</Parag>}
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}