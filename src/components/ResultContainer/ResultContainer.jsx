import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

const resultContainer = ({ suggestedNames }) => {

    const suggestedNamesJSX = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    });

    return (
        <div className="result-container">
            {suggestedNamesJSX}
        </div>
    );
}

export default resultContainer;