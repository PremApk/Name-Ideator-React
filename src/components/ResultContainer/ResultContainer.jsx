import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

const { v4: uuidv4 } = require('uuid');

const resultContainer = ({ suggestedNames }) => {

    const suggestedNamesJSX = suggestedNames.map((suggestedName) => {
        return <NameCard key={uuidv4()} suggestedName={suggestedName} />
    });

    return (
        <div className="result-container">
            {suggestedNamesJSX}
        </div>
    );
}

export default resultContainer;