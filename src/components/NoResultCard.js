// import {ReactComponent as SiteStyleIcon} from './card-icons/tree.svg';
import React from 'react';
import '../containers/Card.css';

const NoResultCard = () => {

  return (
      <ul className="noresults">
        <li id="noresults" key="1" className="directory-card-full mini">
        <div className="directory-card mini">
            <h3 className="card-title mini">Sorry, no sites we have on file match your request.</h3>
            <div className="card-address mini">
            </div>

            
        </div>
        </li>
      </ul>
  );
}

export default NoResultCard;