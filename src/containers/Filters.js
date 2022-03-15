import React from 'react';
import FilterOpenToggle from '../components/FilterOpenToggle';
import KeyLegend from '../components/KeyLegend';
import './Filters.css';

const Filters =({ toggleFilters, filtersOpen, siteType, foodAvailable, updateFilters, ukaraStatus, counties, siteCounty }) => {
  

    return (
    <div className={filtersOpen? "filter_pane show" : "filter_pane" }>
        <div className="filter_key_box">

        <div className="filters">
            <h2>Choose your filter options!</h2>
            <div className='directory_dropowns'>

            <div className="site_type dropdown">
                <p>
                    <label htmlFor="site_type">Site Type: </label>

                    <select value={siteType} onChange={updateFilters} name="site_type" id="site_type">
                        <option value="" defaultValue>Any</option>
                        <option value="indoor">Indoor</option>
                        <option value="outdoor">Outdoor</option>
                    </select>
                </p>
            </div>

         <div className="site_type dropdown">
            <p>
                <label htmlFor="food_available">Food Availability: </label>

                <select value={foodAvailable} onChange={updateFilters} name="food_available" id="food_available">
                    <option value="" defaultValue>Any</option>
                    <option value="provided">Provided</option>
                    <option value="notprovided">Not Provided</option>
                    <option value="notprovidedav">Not Provided, But Available.</option>
                </select>
            </p>
         </div>

         <div className="site_type dropdown">
            <p>
                <label htmlFor="food_available">UKARA Status: </label>

                <select value={ukaraStatus} onChange={updateFilters} name="ukara" id="ukara">
                    <option value="" defaultValue>Any</option>
                    <option value="true">Yes Registered</option>
                    <option value="false">Not Registered</option>
                </select>
            </p>
         </div>

         <div className="site_type dropdown">
            <p>
                <label htmlFor="county">Location: </label>
                <select value={siteCounty} onChange={updateFilters} name="county" id="county">
                    <option value="" defaultValue>Any</option>
                    {counties.map((county) =>(<option value={county.toLowerCase()}>{county}</option>))};
                </select>
            </p>
         </div>
         
         <div className="site_type dropdown">
            <p>
                <label htmlFor="RESET">Reset Filters: </label>

                <input type="submit" value="RESET" onClick={updateFilters} />
            </p>
         </div>

     </div>
        </div>
        <KeyLegend />
        <FilterOpenToggle 
        toggleFilters={toggleFilters}
        filtersOpen={filtersOpen}
        />
        </div>
    </div>
    )
  ;
}

export default Filters;