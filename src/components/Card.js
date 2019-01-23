import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, name, comment} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={name} className="carousel-image"/>
            <div className="details">
                <div className="name">
                    {name}<br />
                </div>
                <p id="feature-p1">
                    {comment}   

                </p>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;