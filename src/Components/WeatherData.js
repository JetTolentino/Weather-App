import './weatherdata.css';
import React, { Component } from 'react';

const WeatherData = (props) => {
  const getTemp = ()=> {
    
    if(props.temp == ''){
      return ''
    }
    else{
      return parseFloat(props.temp).toFixed(1).toString() + " C"
    }
  }

    return ( 
        <div className='weather-data'>    
            <div className='weather-info'>
              <div className='icon'>
              <img className='image' src={`/assets/icons/${props.icon}.svg`} />

              </div>
              <div className='temp'>
                { getTemp()}
              </div>
              <div className='weather'>
                {props.weather}
              </div>
            </div>
            <div className='misc-data'>

            </div>
          </div>
     );
}
 
export default WeatherData;