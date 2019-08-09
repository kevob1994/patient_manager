import React from 'react';
import Date from './Date';
import PropTypes from 'prop-types';

const ListDatePets = ({ dates, deleteDatePet }) => {

    const mensaje = Object.keys(dates).length === 0 
        ?  'No hay citas' 
        : 'Administra las citas aqui'
    return ( 
        <div className=" card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                <div className="lista-dates">
                    {
                        dates.map( (date, id) => (
                            <Date 
                                key={id}
                                idDate={id}
                                date={date}
                                deleteDatePet={deleteDatePet}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
     );
}

ListDatePets.protoType = {
    dates: PropTypes.array,
    deleteDatePet: PropTypes.func,
}
 
export default ListDatePets;