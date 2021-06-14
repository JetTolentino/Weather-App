import './App.css';
import React, { Component } from 'react';
import Search from './Components/Search';
import WeatherData from './Components/WeatherData';
import DayWeather from './Components/DayWeather';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      display:'',
      temp:'',
      weather:'',
      icon:'',
      date:'',
      timezone:'',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  handleChange=(event)=>{
    this.setState({display:event.target.value}, ()=>{console.log(this.state.display)})

}


   async handleSubmit(event){
    event.preventDefault();
    console.log(this.state.display)
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${this.state.display}&units=metric&appid=64c1a099538b60d5c9beb54ea93e5019`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    console.log(data.weather[0].main)
    this.setState({
      temp:data.main.temp, 
      weather: data.weather[0].main,
      icon:data.weather[0].icon,
      date: data.dt,
      timezone:data.timezone,
      city:data.name,
      country:data.sys.country
    })
  } 

  getData(){
    return this.state.data;
  }

  render() {
    

    return ( 
      <div className='weather-body'>
        <div className='weather-wrapper'> 
          <Search onSubmit={this.handleSubmit} onChange={this.handleChange}></Search>
          <WeatherData 
          temp={this.state.temp} 
          weather={this.state.weather}
          icon={this.state.icon}
          date={this.state.date}
          timezone={this.state.timezone}
          city={this.state.city}
          country={this.state.country}
          ></WeatherData>

          
          </div>
        </div>
      
     );
  }
}
 
export default App;



