import React from 'react';
import Card from './Card';

const Directory =({ sitelist, filterSiteType, filterFood, filterUkara }) => {

    return (
    <div className="directory_pane">
      <ul>
      {sitelist.map((gamesite, i) => {
        if(filterSiteType !== sitelist[i].style && filterSiteType !== '') {
          return
        };
        if(filterFood !== sitelist[i].food && filterFood !== '') {
          return
        };
        if(filterUkara !== sitelist[i].ukara && filterUkara !== undefined) {
          return
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
          />
        )
      })}
      </ul>
    </div>
    )
  ;
}

export default Directory;