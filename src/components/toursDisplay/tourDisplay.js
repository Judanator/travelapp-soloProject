import React, { Component } from "react";
import "./tourDisplay.css";

export default class tourDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourImage: "",
      tourName: "",
    };
  }

  componentDidMount() {
    const apiKey = "5ae2e3f221c38a28845f05b6e7f2c7bfeea5c07877fe2b50e97906f9";

    fetch(`http://api.opentripmap.com/0.1/ru/places/xid/${this.props.xid}?apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          tourImage: data.preview.source,
          tourName: data.name,
        });
      });
  }

  render() {
    return (
      <div className="tourCard">
        <img src={this.state.tourImage} />
        <br />
        <label> Name:</label>
        <span id="location">{this.state.tourName}</span>
        <br />
        <label> Kind: </label>
        <span id="location"></span>
        <button>Save Attraction</button>
      </div>
    );
  }
}
