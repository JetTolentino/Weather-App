import './weatherdata.css';
import React, { Component } from 'react';

const WeatherData = (props) => {
  const data = ()=> {JSON.parse(props.data)}

    return ( 
        <div className='weather-data'>    
            <div className='weather-info'>
              <div className='icon'>
                <object>
                <img className='image' src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} onError={()=>"this.style.display = 'none';"} alt={''}></img>
                </object>
              </div>
              <div className='temp'>
                {props.temp}
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