import React from 'react';
import costSingleIcon from '../components/card-icons/resized/23.webp';

const SiteCost = ({ costInput, costActualInput, costRentalInput, expanded, setClicked }) => {
      if (costInput === 1 ) {
          return (<div className={!expanded ? "card-cost icon mini" : "card-cost icon maxi"}
          onClick={() => {
            if(expanded) {
              setClicked(!expanded)}}}
              >
            <img src={costSingleIcon} alt="The site reports is low cost" height="60px" width="60px" />
            {expanded ? 
            <p>The site reports as £{costActualInput} walkon <br /> and £{costRentalInput} with gun rental.</p> : ''
            }
          </div>
            )
          } else if (costInput === 2 ) {
            return (
              <div className={!expanded ? "card-cost icon mini" : "card-cost icon maxi"}
              onClick={() => {
                if(expanded) {
                  setClicked(!expanded)}}}
                  >
                  <img src={require("../components/card-icons/hamburgerCheck.svg").default} alt="The site reports is medium cost" height="60px" width="60px" />
                  {expanded ?
                  <p>The site reports as £{costActualInput} walkon <br /> and £{costRentalInput} with gun rental.</p> : ''
                  }
                </div>
                )
              } else if (costInput === 3 ) {
                return (
                  <div className={!expanded ? "card-cost icon mini" : "card-cost icon maxi"}
                  onClick={() => {
                    if(expanded) {
                      setClicked(!expanded)}}}
                      >
                <img src={require("../components/card-icons/hamburgerCheck.svg").default} alt="The site reports is high cost" height="60px" width="60px" />
                {expanded ? 
                <p>The site reports as £{costActualInput} walkon <br /> and £{costRentalInput} with gun rental.</p> : ''
                }
              </div>
              )
      }
      return (<p>BUGGER!</p>)
  }

export default SiteCost