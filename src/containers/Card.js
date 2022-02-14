// import {ReactComponent as SiteStyleIcon} from './card-icons/tree.svg';
import React, { useState } from 'react';
import SiteContacts from '../components/SiteContacts';
import SiteUKARA from '../components/SiteUKARA';
import SiteStyle from '../components/SiteStyle';
import SiteFood from '../components/SiteFood';
import SiteCost from '../components/SiteCost';
import SiteFPS from '../components/SiteFPS';
import SiteAge from '../components/SiteAge';
import SiteDescription from '../components/SiteDescription';
import './Card.css';

const Card = ({ siteKey, siteLogo, siteTitle, siteAddress, siteTown, siteCounty, sitePostcode, sitePhone, siteWebsite, siteFacebook, siteStyle, ukaraStatus, siteFood, siteCost, siteFPS1, siteFPS2, siteFPS3, siteAge, siteDescription, siteCostActual, siteCostActualRental }) => {


  const [isClicked, setIsClicked] = useState(false);


  // Phone Number checking...
  const regexPhoneTest = /^[0-9 ]+$/.test(sitePhone);


  if (regexPhoneTest !== true) {
    sitePhone = "Unknown";
  }


  return (
    <li id={siteKey} key={siteKey} className={!isClicked ? "directory-card-full mini" : "directory-card-full maxi"}
    onClick={() => {
      if(!isClicked) {
        setIsClicked(!isClicked)}}}
        >
      <div className={!isClicked ? "directory-card mini" : "directory-card maxi"}>
        <img className={!isClicked ? "card-logo mini" : "card-logo maxi"} src={siteLogo} alt="The Gamesite Logo"
            onClick={() => {
              if(isClicked) {
                setIsClicked(!isClicked)}}}
                ></img> 
        <h3 className={!isClicked ? "card-title mini" : "card-title maxi"}
            onClick={() => {
              if(isClicked) {
                setIsClicked(!isClicked)}}}
                >{siteTitle}</h3>
        <div className={!isClicked ? "card-address mini" : "card-address maxi"}
            onClick={() => {
              if(isClicked) {
                setIsClicked(!isClicked)}}}
                >
          {!isClicked ? '' : <p>{siteAddress}</p>}
          <p>{siteTown}, {siteCounty}</p>
          {!isClicked ? '' : <p>{sitePostcode}</p>}
          </div>

          <SiteContacts 
          phoneInput={sitePhone}
          socialsInput={siteFacebook}
          websiteInput={siteWebsite}
          expanded={isClicked}
          />

          <SiteStyle 
          styleInput={siteStyle} 
          expanded={isClicked}
          setClicked={setIsClicked}
          />

        
          <SiteCost 
          costInput={siteCost} 
          costActualInput={siteCostActual}
          costRentalInput={siteCostActualRental}
          expanded={isClicked}
          setClicked={setIsClicked}
          />

          <SiteFood 
          foodInput={siteFood} 
          setClicked={setIsClicked}
          expanded={isClicked}
/>

          <SiteAge ageInput={siteAge} 
          expanded={isClicked}
          setClicked={setIsClicked}
          />

          <SiteFPS 
          fpsInput1={siteFPS1}
          fpsInput2={siteFPS2}
          fpsInput3={siteFPS3}
          expanded={isClicked}
          setClicked={setIsClicked}
          />

          <SiteUKARA  ukaraInput={ukaraStatus}
          expanded={isClicked}
          setClicked={setIsClicked}
          />

        <SiteDescription 
          descriptionInput={siteDescription} 
          expanded={isClicked}
          setClicked={setIsClicked}
          />

        <p className={!isClicked ? "card-link mini" : "card-link maxi"}>
          {!isClicked ?
          `Click to expand ID.` :
          <a href={siteKey}>Open in New Window.</a>
          }
        </p>
      </div>
    </li>
  );
}

export default Card;