import React, { Component } from 'react';
import Directory from './containers/Directory';
import Filters from './containers/Filters';
import FilterOpenToggle from './components/FilterOpenToggle';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      directoryIndex: [],
      updatedDirectoryArray: [],
      siteType: '',
      foodAvailable: '',
      siteCounty: '',
      counties: [],
      ukaraStatus: undefined,
      filtersOpen: false
    }
  }

  componentDidMount() {
    this.getDirectoryArray();
    this.getCountiesArray();
    // console.log(this.directoryIndex);
  }

  // Get initial array from external source.
  getDirectoryArray = async () => {
    try {
      let directoryReturn;
      if (await window.location.hostname === "localhost") {
        directoryReturn = await fetch("./directory_react_element/testobj2.json");
      } else {
        directoryReturn = await fetch("./testobj2.json");
      }
      const directoryArray = await directoryReturn.json();
      this.setState({ directoryIndex: directoryArray });
      if (this.state.updatedDirectoryArray.length === 0) {
        this.setState({ updatedDirectoryArray: directoryArray });
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  // Get initial array from external source.
  getCountiesArray = async () => {
    try {
      let countiesReturn;
      if (await window.location.hostname === "localhost") {
        countiesReturn = await fetch("./directory_react_element/counties.json");
      } else {
        countiesReturn = await fetch("./counties.json");
      }
      const countiesArray = await countiesReturn.json();
      this.setState({ counties: countiesArray });
    } catch (e) {
      console.log("Error", e);
    }
  };
  
    updateDirectoryArray = () => {
        this.setState(updatedDirectoryArray => ({
          updatedDirectoryArray: this.state.directoryIndex.reduce(((arr, site) => {
            // console.log(site.style, this.state.siteType, arr);


            // Main filter logic
            // if (this.state.siteType !== '' && this.state.foodAvailable === '') {
            //   if (site.style === this.state.siteType) {
            //     console.log(arr, "array");
            //     arr.push(site);
            //     return arr;
            //   }
            // } else if (this.state.siteType !== '' && this.state.foodAvailable !== '') {
            //   if (site.style === this.state.siteType && site.food === this.state.foodAvailable) {
            //     console.log(arr, "array");
            //     arr.push(site);
            //     return arr;
            //   }
            // } else if (this.state.siteType === '' && this.state.foodAvailable !== '') {
            //   if (site.food === this.state.foodAvailable) {
            //     console.log(arr, "array");
            //     arr.push(site);
            //     return arr;
            //   }
            // } 






            return arr;
          }), []
          )

        }), () => {
          console.log(this.state.updatedDirectoryArray, "updated");
        })

    }

  toggleFilters = (current) => {
    this.setState({ filtersOpen: current })
  }
  
  updateFilters = (event) => {
    if (event.target.id === "site_type") {
      this.setState({ siteType: event.target.value }
        //, this.updateDirectoryArray
        );
    }
    if (event.target.id === "food_available") {
      this.setState({ foodAvailable: event.target.value }
        //, this.updateDirectoryArray
        );
    }
    if (event.target.id === "ukara") {
      if (event.target.value === 'true') {
        this.setState({ ukaraStatus: true });
      } else if (event.target.value === 'false') {
          this.setState({ ukaraStatus: false });
        } else if (event.target.value === '') {
          this.setState({ ukaraStatus: undefined });
        }
      }
      
      if (event.target.id === "county") {
        console.log(event.target.value)
        this.setState({ siteCounty: event.target.value.toLowerCase() }
          //, this.updateDirectoryArray
          );
      }
    // this.updateDirectoryArray(event.target.id, event.target.value);
  }

  render() {
    return (
      <div className="directory_full_page">
        <Directory 
        sitelist={this.state.updatedDirectoryArray} 
        filterSiteType={this.state.siteType}
        filterFood={this.state.foodAvailable} 
        filterUkara={this.state.ukaraStatus} 
        filterCounty={this.state.siteCounty} 
        />
        <FilterOpenToggle 
        toggleFilters={this.toggleFilters}
        filtersOpen={this.state.filtersOpen}
        />
        <Filters 
        toggleFilters={this.toggleFilters}
        filtersOpen={this.state.filtersOpen}
        sitelist={this.state.updatedDirectoryArray} 
        updateFilters={this.updateFilters}
        siteType={this.state.siteType}
        foodAvailable={this.state.foodAvailable} 
        ukaraStatus={this.state.ukaraStatus} 
        counties={this.state.counties} 
        siteCounty={this.state.siteCounty} 
        />
      </div>
    );
  }
}

export default App;
