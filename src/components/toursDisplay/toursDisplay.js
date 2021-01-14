import React from 'react'
import TourDisplay from './tourDisplay'

const toursDisplay = props => {
    const tours = [];
    const apiKey = '5ae2e3f221c38a28845f05b6e7f2c7bfeea5c07877fe2b50e97906f9'

    if(props.tour.length > 0) {
        for(let i = 0; i < props.tour.length; i++) {
            tours.push(<TourDisplay 
                key={`tour${i}`}
                xid ={props.tour[i].xid}
            />)
        }
    }

    // fetch(`http://api.opentripmap.com/0.1/ru/places/xid/Q372040?apikey=${apiKey}`)
    // .then(res => res.json())
    // .then(data => console.log(data))


    return (
        <div>
            <h1> Tour List </h1>
            {tours}
        </div>
    )
}

export default toursDisplay;
