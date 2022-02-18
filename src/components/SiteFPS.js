import React from 'react';
import fpsIcon from '../components/card-icons/resized/31.webp';
import './SiteFPS.css';

const SiteFPS = ({ fpsInput1, fpsInput2, fpsInput3, expanded, setClicked }) => {


    const renderNumbers = ( fpsInput, firstCall = false, setClicked ) => {
        let textReturn = '';
        if(typeof fpsInput === 'number') {
            textReturn = fpsInput
        }
        if(textReturn === '' && firstCall === true){
            return(<p>NA</p>)
        }
        return (<p>{textReturn}</p>);
    }

    return(
        <div className={!expanded ? "card-fps icon mini" : "card-fps icon maxi"}
        onClick={() => {
            if(expanded) {
              setClicked(!expanded)}}}
                  >
            <div className="fps_container">
                <img src={fpsIcon} alt="icon to denote the site FPS levels" height="60px" width="60px" />
                <div className="numbers">
                    { renderNumbers( fpsInput1, true ) }    
                    { renderNumbers( fpsInput2 ) }    
                    { renderNumbers( fpsInput3 ) }    
                </div>

            </div>
            {expanded ? 
            <p>Max FPS levels for AEGs, DMRs and Bolt action snipers if available.</p> : ''
            }
        </div>
    )
  }

export default SiteFPS