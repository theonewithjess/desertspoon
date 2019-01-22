import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, city, address} = property;
    return (
        <div id={`card-${index}`} className="card">
        
            <img src={picture} alt={city} className="carousel-image"/>
            <div className="details">
                
                    <div className="name">
                        {city}<br />
                    </div>
                    <p id="feature-p1">
                        {address}   

                    </p>

             
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;