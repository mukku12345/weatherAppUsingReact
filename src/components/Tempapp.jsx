import React from 'react'
import { useState,useEffect } from 'react';
import Axios from "axios";
import './style.scss'

export const Tempapp = () => {

    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Delhi");

    const fetchWeather = async (e) => {
        e.preventDefault();
        const response = await Axios.get(
          `http://api.weatherstack.com/current?access_key=1c8541cdb10f2d5719a07207dbfb256e&query=${search}`,
        );
        setCity(response.data);
      };

   

  return (
        <>
        <div className='container '>
        <div>

    <div className='inputdata' >
            
    <form onSubmit={fetchWeather}>

        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter City "
        />
        <button type={"submit"}>Search</button>
      </form>
        
        </div>
        {!city?(<p>No Data Found</p>):
        (
            
 <div className='info'>
    <div>
    <div className='tempandimage'>

     <div className='temprature'>
    <h1>{city.current.temperature}<span>&deg;C</span></h1>
    <p className='feelsLike'>Feels Like  {city.current.feelslike}&deg;C</p>
     </div>

    <div className='location'>
   <p>
     <i className="fa-solid fa-street-view"></i>
    {search},{city.location.country}
    </p>
    </div>

<div className='icon'>
<img src={city.current.weather_icons} alt='weather'/>
</div>

</div>

<div className='date'>
<h3>{city.location.localtime}</h3>
<p>{city.current.weather_descriptions}</p>
</div>

</div>


<div className='current-section'>
<div className='current'>
<p className='humidity'>Humidity</p>
<p className='wind-speed'>Wind-speed</p>
<p className='wind direction'>Wind-direction</p>
<p className='pressure'>Pressure</p>
<p className='uv'>UV index</p>
<p className='visibility'>Visibility</p>
</div>

<div className='current'>
<p className='humidity'>{city.current.humidity}%</p>
<p className='Wind-speed'>{city.current.wind_speed} km/h</p>
<p className='Wind-direction'>From  {city.current.wind_dir}</p>
<p className='Pressure'>{city.current.pressure} mBar</p>
<p className='uv'>{city.current.uv_index}</p>
<p className='visibility'>{city.current.visibility} km</p>
</div>
</div>

</div>      
        
        )}
</div>
</div>
</>
  )
}
