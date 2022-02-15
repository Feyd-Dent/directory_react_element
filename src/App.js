import React, { Component } from 'react';
import Directory from './containers/Directory';
import Filters from './containers/Filters';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      directoryIndex: [],
      updatedDirectoryArray: [],
      siteType: '',
      foodAvailable: '',
      ukaraStatus: undefined
    }
  }

  componentDidMount() {
    this.getDirectoryArray()
    // console.log(this.directoryIndex);
  }

  // Get initial array from external source.
  getDirectoryArray = async () => {
    try {
      const directoryReturn = await fetch('../testobj.json');
      const directoryArray = await directoryReturn.json();
      this.setState({ directoryIndex: directoryArray });
      if (this.state.updatedDirectoryArray.length === 0) {
        this.setState({ updatedDirectoryArray: directoryArray });
      }
    } catch (e) {
      console.log("Error", e);
    }
  };
  
    updateDirectoryArray = () => {
        this.setState(updatedDirectoryArray => ({
          updatedDirectoryArray: this.state.directoryIndex.reduce(((arr, site) => {
            // console.log(site.style, this.state.siteType, arr);


            // Main filter logic
            if (this.state.siteType !== '' && this.state.foodAvailable === '') {
              if (site.style === this.state.siteType) {
                console.log(arr, "array");
                arr.push(site);
                return arr;
              }
            } else if (this.state.siteType !== '' && this.state.foodAvailable !== '') {
              if (site.style === this.state.siteType && site.food === this.state.foodAvailable) {
                console.log(arr, "array");
                arr.push(site);
                return arr;
              }
            } else if (this.state.siteType === '' && this.state.foodAvailable !== '') {
              if (site.food === this.state.foodAvailable) {
                console.log(arr, "array");
                arr.push(site);
                return arr;
              }
            } 






            return arr;
          }), []
          )

        }), () => {
          console.log(this.state.updatedDirectoryArray, "updated");
        })

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
    
    // this.updateDirectoryArray(event.target.id, event.target.value);
  }

  render() {
    return (
      <div className="directory_full_page">
        <Filters 
        sitelist={this.state.updatedDirectoryArray} 
        updateFilters={this.updateFilters}
        siteType={this.state.siteType}
        foodAvailable={this.state.foodAvailable} 
        ukaraStatus={this.state.ukaraStatus} 
        />
        <Directory 
        sitelist={this.state.updatedDirectoryArray} 
        filterSiteType={this.state.siteType}
        filterFood={this.state.foodAvailable} 
        filterUkara={this.state.ukaraStatus} 
        />
      </div>
    );
  }
}

export default App;
