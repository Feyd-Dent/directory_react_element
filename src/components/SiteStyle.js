// import React from 'react';
// import {ReactComponent as SiteStyleIcon} from './card-icons/tree.svg';


const SiteStyle = ({ styleInput, expanded, setClicked }) => {
    
    if (styleInput === "outdoor" ) {
        return (
            <div className={!expanded ? "card-style icon mini" : "card-style icon maxi"}
            onClick={() => {
                if(expanded) {
                  setClicked(!expanded)}}}
                      >
                          <img src={require("./card-icons/tree.svg").default} alt="The site is primarily or mainly outdoors" height="60px" width="60px" />
            {expanded ? <p>This is a site primarily or mainly outdoors</p> : ''}
            </div>
        );
    } else if (styleInput === "indoor") {
        return (
            <div className={!expanded ? "card-style icon mini" : "card-style icon maxi"}
            onClick={() => {
                if(expanded) {
                  setClicked(!expanded)}}}
                      >
                <p>NO!</p>
                {expanded ? <p>This is a site primarily indoor or CQB</p> : ''}
            </div>
        ) 
    }
  }

export default SiteStyle