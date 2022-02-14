import React from 'react';
import foodPosIcon from '../components/card-icons/resized/17.webp';

const SiteFood = ({ foodInput, expanded, setClicked }) => {
      if (foodInput === "provided" ) {
          return (
            <div className={!expanded ? "card-food icon mini" : "card-food icon maxi"}
            onClick={() => {
              if(expanded) {
                setClicked(!expanded)}}}
                >
            <img src={foodPosIcon} alt="The site reports as food is available onsite" height="60px" width="60px" />
            {expanded ? <p>The site reports as food is available on site</p> : ''}
            </div>
            )
          } else if (foodInput === "notprovided" ) {
            return (
              <div className={!expanded ? "card-food icon mini" : "card-food icon maxi"}
              onClick={() => {
                if(expanded) {
                  setClicked(!expanded)}}}
                  >
                <img src={require("../components/card-icons/hamburgerCheck.svg").default} alt="The site reports as food is not available onsite" height="60px" width="60px" />
                {expanded ? <p>The site reports as food is not available on site</p> : ''}
                </div>
                )
        }
  }

export default SiteFood