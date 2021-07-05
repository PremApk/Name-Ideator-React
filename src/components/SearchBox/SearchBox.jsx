import React from 'react';
import './SearchBox.css';

const searchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                className="search-input"
                placeholder="Search your Keywords here!" />
        </div>
    );
};

export default searchBox;