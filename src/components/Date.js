import React from 'react';
import PropTypes from 'prop-types';

const Date = ({ date, deleteDatePet, idDate }) => {
    return ( 
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{date.pet}</h3>
                <p className="card-text"><span>Nombre Dueño: </span> {date.owner} </p>
                <p className="card-text"><span>Fecha: </span> {date.date} </p>
                <p className="card-text"><span>Hora: </span> {date.time} </p>
                <p className="card-text"><span>Sintomas: </span></p>
                <p className="card-text">{ date.symptom  }</p>

                <button 
                    className="btn btn-danger"
                    onClick={() => deleteDatePet(idDate)}
                >
                    Eliminar
                </button>
            </div>
        </div>
     );
}

Date.protoTypes = {
    idDate: PropTypes.number,
    date: PropTypes.object,
    deleteDatePet: PropTypes.func,
}
 
export default Date;