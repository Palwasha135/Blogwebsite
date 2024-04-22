import React from 'react'
import moment from "moment";

const WeatherCard = ({date,temp,min,max}) => {

  return (
      <div >

            {/* <div> {moment(date).format("")} </div> */}
            <h1> {temp}</h1>
            
            {/* <div> {min}°C - {max}°C </div> */}
        </div>
  )
}

export default WeatherCard