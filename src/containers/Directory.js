import React from 'react';
import Card from './Card';
import './Directory.css';

const Directory =({ sitelist, filterSiteType, filterFood, filterUkara, filterCounty }) => {

    return (
    <div className="directory_pane">
      <ul>
      {sitelist.map((gamesite, i) => {
        if(filterSiteType !== sitelist[i].style && filterSiteType !== '') {
          return null;
        };
        if(filterFood !== sitelist[i].food && filterFood !== '') {
          return null;
        };
        if(filterUkara !== sitelist[i].ukara && filterUkara !== undefined) {
          return null;
        };
        if(filterCounty.toLowerCase() !== sitelist[i].county.toLowerCase() && filterCounty !== '') {
          return null;
        };
        return (
          <Card 
          siteKey={sitelist[i].id}
          siteLogo={sitelist[i].logo}
          siteTitle={sitelist[i].title}
          siteAddress={sitelist[i].address1}
          siteTown={sitelist[i].address2}
          siteCounty={sitelist[i].county}
          sitePostcode={sitelist[i].postcode}
          sitePhone={sitelist[i].number}
          siteWebsite={sitelist[i].website}
          siteFacebook={sitelist[i].facebook}
          siteStyle={sitelist[i].style}
          ukaraStatus={sitelist[i].ukara}
          siteFood={sitelist[i].food}
          siteCost={sitelist[i].cost}
          siteCostActual={sitelist[i].costActual1}
          siteCostActualRental={sitelist[i].costActual2}
          siteFPS1={sitelist[i].fps1}
          siteFPS2={sitelist[i].fps2}
          siteFPS3={sitelist[i].fps3}
          siteAge={sitelist[i].age}
          siteDescription={sitelist[i].description}
          siteLink={sitelist[i].link}
          />
        )
      })}
      </ul>
    </div>
    )
  ;
}

export default Directory;