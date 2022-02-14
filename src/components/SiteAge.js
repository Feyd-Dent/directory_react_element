import React from 'react';
// import fpsIcon from '../components/card-icons/resized/31.webp';
import './SiteAge.css';

const SiteAge = ({ ageInput, expanded, setClicked }) => {
    let textReturn = '';

    const renderNumbers = ( ageInput ) => {
        if(typeof ageInput === 'number') {
            textReturn = ageInput
        }
        if(textReturn === '' && ageInput === false){
            return(<p>Not Known</p>)
        }
        return (<p>{textReturn}+</p>);
    }

    return(
        <div className={!expanded ? "card-age icon mini" : "card-age icon maxi"}
        onClick={() => {
            if(expanded) {
              setClicked(!expanded)}}}
              >
            <div className="age_container">
                <p className="headline"><strong>Min Age</strong></p>
                    { renderNumbers( ageInput ) }    
            </div>
            {expanded ? 
            <p>
                Minimum age to attend the site is {textReturn}+
            </p> : ''
            }
        </div>
    )
  }

export default SiteAge