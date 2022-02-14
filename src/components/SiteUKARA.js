import React from 'react';
import ukaraPosIcon from '../components/card-icons/resized/30.webp';

const SiteUKARA = ({ ukaraInput, expanded, setClicked }) => {
      if (ukaraInput === true ) {
          return (
            <div className={!expanded ? "card-ukara icon mini" : "card-ukara icon maxi"}
            onClick={() => {
              if(expanded) {
                setClicked(!expanded)}}}>
            <img src={ukaraPosIcon} alt="The site reports as UKARA registered" height="60px" width="60px" />
            {expanded ? <p>The site reports as UKARA registered</p> : ''}
            </div>
            )
        } else if (ukaraInput === false ) {
          return (
                <div className={!expanded ? "card-ukara icon mini" : "card-ukara icon maxi"}
                onClick={() => {
                  if(expanded) {
                    setClicked(!expanded)}}}
                      >
                <img src={require("../components/card-icons/ukara.svg").default} alt="The site reports as not UKARA registered" height="60px" width="60px" />
                {expanded ? <p>The site reports as not UKARA registered</p> : ''}
                </div>
                )
        }
  }

export default SiteUKARA