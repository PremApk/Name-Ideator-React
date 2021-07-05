import React from 'react';
import './NameCard.css';

const nameCheapURL = 'https://www.namecheap.com/domains/registration/results/?domain='

const NameCard = ({ suggestedName }) => {
    return (
        <a className="card-link" href={`${nameCheapURL}${suggestedName}`}>
            <div className="name-card-container">
                <p className="name-card">{suggestedName}</p>
            </div>
        </a>
    );
};

export default NameCard;