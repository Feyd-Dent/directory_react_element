import React from 'react';
import './FilterOpenToggle.css';

const FilterOpenToggle =({ filtersOpen, toggleFilters }) => {

    return (
        <div className="filter-headline mobile-only"
        onClick={() => {toggleFilters(!filtersOpen)}}
        >
            Filters 
            <div className={!filtersOpen ? "hamburger" : "hamburger menuout"}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
  ;
}

export default FilterOpenToggle;