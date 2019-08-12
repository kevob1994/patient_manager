import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = { 
    cita: {
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom: ''
    },
    err: false
 }
class NewDatePet extends Component {
    state = { 
        ...initialState
     }

    handleChange = e => {
        this.setState({
            cita:{
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const { pet ,owner, date, time, symptom } = this.state.cita;

        if( pet === '' || owner === '' || date === '' || time === '' || symptom === '' ){
            this.setState({ err: true });
            return;
        }
        this.props.createNewDatePet(this.state.cita)
        this.setState({ ...initialState })
    }

    render() { 
        const { err } = this.state
        return ( 
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center"> 
                        Llena el formulario para crear una nueva cita
                    </h2>
                    { err ? 
                        <div className="alert alert-danger mt-2 mb-2 text-center">
                            todos los campos son obligatorios
                        </div>
                        : null}
                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre mascota</label>
                            <div className="col-sm-8 col-lg-10 col-form-label">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre mascota"
                                    name="pet"
                                    onChange={this.handleChange}
                                    value={this.state.cita.pet}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10 col-form-label">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del dueño de la mascota"
                                    name="owner"
                                    onChange={this.handleChange}
                                    value={this.state.cita.owner}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4 col-form-label">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    onChange={this.handleChange}
                                    value={this.state.cita.date}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4 col-form-label">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="time"
                                    onChange={this.handleChange}
                                    value={this.state.cita.time}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10 col-form-label">
                                  <textarea
                                    className="form-control"
                                    name="symptom"
                                    placeholder="Describe los sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.symptom}
                                  ></textarea>
                            </div>
                        </div>

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita"/>
                    </form>
                </div>
            </div>
        );
    }
}

NewDatePet.protoTypes = {
    createNewDatePet: PropTypes.func
}
 
export default NewDatePet;