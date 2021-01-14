import React, { Component } from 'react'
import "./mainPage.css";
import ToursDisplay from './toursDisplay/toursDisplay'

export default class mainPage extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      location: '',
      country: '',
      tourList: []
    }

    this.getLocation = this.getLocation.bind(this)
    this.getCountry = this.getCountry.bind(this)
    this.submitBtn = this.submitBtn.bind(this)
  }

  getLocation(event) {
    this.setState({
      location: event.target.value,
    })
  }

  getCountry(event) {
    this.setState({
      country: event.target.value
    })
  }

  submitBtn(event){
    event.preventDefault();
    const apiKey = '5ae2e3f221c38a28845f05b6e7f2c7bfeea5c07877fe2b50e97906f9'
    const pageLength = 5;
    let offset = 0

    fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=newyork&country=us&apikey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      let lon = data.lon;
      let lat = data.lat;

      let apiQuery = "https://api.opentripmap.com/0.1/en/places/" + "radius" + "?apikey=" + apiKey + "&" + `radius=1000&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=json`;
      fetch(apiQuery)
      .then(res => res.json())
      .then(data => {
          this.setState({
            ...this.state,
            tourList: data
          })
      })
    })
  };

  render() {
    return (
      <div className="mainPageDiv">
        <h1 className="titleMain">Explore The World</h1>
          <img className="gifWorld" src="https://i.postimg.cc/JhK5h8n4/giphy.gif"></img>
          <p className="subMain">Type in a location and get the most popular tours, attractions.</p>
            <input placeholder="where do you want to explore? (enter region, city, village (e.g Moscow)" onChange={this.getLocation}/>
            <input placeholder="country (e.g ru)" onChange={this.getCountry}/>
            <button onClick={this.submitBtn}> submit </button>

            <ToursDisplay 
              tour = {this.state.tourList}
            />
        </div>
      );
  }
}
