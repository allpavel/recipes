import React from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice';

const searchIcon = "./img/search.svg";
const clearIcon = "./img/clear.svg";

export const SearchTerm = (props) => {
    const { searchTerm, dispatch } = props;

    const onSearchTermHandler = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    const onClearSearchHandler = () => {
        dispatch(clearSearchTerm());
    };

    return (
        <div id="search-container">
            <img id="search-icon" alt="search-icon" src={searchIcon} />
            <input id="search" type="text" value={searchTerm} onChange={onSearchTermHandler} placeholder="Search..." />
            {searchTerm.length > 0 && (
                <button onClick={onClearSearchHandler} type="button" id="search-clear-button">
                    <img src={clearIcon} alt="clear icon" />
                </button>
            )}
        </div>
    );
};