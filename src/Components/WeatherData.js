import './weatherdata.css';
import React, { Component, useEffect } from 'react';
import { getDefaultNormalizer } from '@testing-library/react';
import * as math from "mathjs";
import * as data from './countries.json'

const WeatherData = (props) => {
  const getTemp = ()=> {

    if(props.temp == ''){
      return ''
    }
    else{
      return parseFloat(props.temp).toFixed(1).toString() + " C"
    }
  }
  const getDate=() => {


    if(props.date==''){
      return ''
    }
    else{
      const epoch = math.evaluate(props.date + props.timezone)
      const date = new Date(epoch * 1000)
      console.log(epoch)
      console.log(date)
      return date.getMonth() + " " + date.getDate() + " "+ date.getFullYear() 
    }



  }
  const getIcon=()=>{
    if (props.icon ===''){
      return ''
    }
    else{
      return(
      <div className='icon'>
        <img className='image' src={`/assets/icons/${props.icon}.svg`} />
      </div>
      )
    }
  }
  
  const getCountry = ()=>{
    if(!props.country || !props.city){
      return ""
    }
    else {
      const country_code = props.country
      const city = props.city
      const country = data.countries[country_code]
      return(
        city + " , " + country
      )
    }

  }
    return ( 
        <div className='weather-data'>    
            <div className='weather-info'>
              {getIcon()}
              <div className='temp'>
                { getTemp()}
              </div>
              <div className='weather'>
                {props.weather}
              </div>
              <div className='country'>
                {getCountry()}
              </div>
            </div>
            <div className='misc-data'>

            </div>
          </div>
     );
}
 
export default WeatherData;