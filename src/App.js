import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "c2a19888ac9348c109418f0478cd01a1";
const API_KEY1 = "4b165f4de82a4b17bef202622191005";

class Def extends React.Component{

  state = {
    temp:undefined,
    city:undefined,
    country:undefined,
    wind:undefined,
    pressure: undefined,
    error:undefined
  }

gettingWeather = async (e) => {
  e.preventDefault();
  var city = e.target.elements.city.value;
  
  if(city){
    const api_url = await 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await api_url.json();
    console.log(data);

    var C = Math.floor(data.main.temp - 273.15);
    this.setState({
      temp: C,
      city: data.name,
      country: data.sys.country,
      wind: data.wind.speed,
      pressure: data.main.pressure,
      error: undefined
    });
  } else{
    this.setState({
      temp:undefined,
      city:undefined,
      country:undefined,
      wind:undefined,
      pressure: undefined,
      error:"Введите название города"
    });
  }
}

gettingWeather1 = async (e) => {
  e.preventDefault();
  var city1 = e.target.elements.city.value;
  
  if(city1){
    const api_url = await 
    fetch(`http://api.apixu.com/v1/current.json?key=${API_KEY1}&q=${city1}`);
    const data = await api_url.json();
    console.log(data);

    this.setState({
      temp: data.current.temp_c,
      city: data.location.name,
      country: data.location.country,
      wind: data.current.wind_mph,
      pressure: data.current.pressure_mb,
      error: undefined
    });
  } else{
    this.setState({
      temp:undefined,
      city:undefined,
      country:undefined,
      wind:undefined,
      pressure: undefined,
      error:"Введите название города"
    });
  }
}



  render(){
    return(
    <div className="wr">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 info">
              <Info />
            </div>
            <div className="col-sm-7 form">
              <Form weatherMethod={this.gettingWeather} weatherMethod1={this.gettingWeather1}/>
              <Weather 
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              wind={this.state.wind}
              pressure={this.state.pressure}
              error={this.state.error}
                />
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
    );
  }
}

export default Def;
