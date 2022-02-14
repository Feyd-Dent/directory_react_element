import React from 'react';

const Filters =({ sitelist, siteType, foodAvailable, updateFilters, ukaraStatus }) => {
  
    return (
    <div className="filter_pane">
     <h2>Select a preference to narrow down the choices!</h2>
     <div className='directory_dropowns'>

         <div className="site_type dropdown">
            <p>
                <label htmlFor="site_type">Site Type </label>

                <select value={siteType} onChange={updateFilters} name="site_type" id="site_type">
                    <option value="" defaultValue>Any</option>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                </select>
            </p>
         </div>

         <div className="site_type dropdown">
            <p>
                <label htmlFor="food_available">Food Available </label>

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
                <label htmlFor="food_available">UKARA Registered Site? </label>

                <select value={ukaraStatus} onChange={updateFilters} name="ukara" id="ukara">
                    <option value="" defaultValue>Any</option>
                    <option value="true">Yes Registered</option>
                    <option value="false">Not Registered</option>
                </select>
            </p>
         </div>

     </div>
    </div>
    )
  ;
}

export default Filters;