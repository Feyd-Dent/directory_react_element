// import React from 'react';
// import {ReactComponent as SiteStyleIcon} from './card-icons/tree.svg';


const SiteDescription = ({ descriptionInput, expanded, setClicked }) => {

    if (expanded === true ) {

        return (
            <div className="card-description maxi"
            onClick={() => {
                if(expanded) {
                  setClicked(!expanded)}}}
                  >
                <h6>Description</h6>
                <p>{descriptionInput ? descriptionInput : 'No Description Supplied'}</p>
            </div>
        );
    }; 
    return null;
}

export default SiteDescription