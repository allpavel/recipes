import React from 'react';

export const Button = ({ children, onClickHandler, icon }) => {
    return (
        <button className="favorite-button" onClick={onClickHandler}>
            <img className="heart-icon" alt="heart icon" src={icon} />
            {children}
        </button>
    );
};