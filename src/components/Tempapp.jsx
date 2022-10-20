import React from 'react'
import { useState,useEffect } from 'react';
import './style.scss'

export const Tempapp = () => {

    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Delhi");

   
    const fetchWeather = async (e)=>{
        e.preventDefault();
        // const url=`http://api.weatherstack.com/current?access_key=1c8541cdb10f2d5719a07207dbfb256e&query=${search}`
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5fe394974129a6185ed442c85dfc7878`
         const response=await fetch(url)
         const data=await response.json()
         setCity(data);
    }
    useEffect(()=>{
        fetchWeather();
    },[])

   

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
    <h1>{Math.floor(city.main.temp)}<span>&deg;C</span></h1>
    <p className='feelsLike'>Feels Like  {Math.round(city.main.feels_like)}&deg;C</p>
     </div>

    <div className='location'>
   <p>
     <i className="fa-solid fa-street-view"></i>
    {search},{city.sys.country}
    </p>
    </div>

<div className='icon'>
    
{/* <img src={city.current.weather_icons} alt='weather'/> */}
</div>

</div>

<div className='date'>
{/* <h3>{city.location.localtime}</h3> */}

</div>

</div>


<div className='current-section'>
<div className='current'>
<p className='mintemp'>Min Temp</p>
<p className='maxtemp'>Max Temp</p>
<p className='humidity'>Humidity</p>
<p className='wind-speed'>Wind-speed</p>
<p className='pressure'>Pressure</p>
<p className='visibility'>Visibility</p>
</div>

<div className='current'>
    <p className='mintemp'>{city.main.temp_min}</p>
    <p className='maxtemp'>{city.main.temp_max}</p>
<p className='humidity'>{city.main.humidity}%</p>
<p className='Wind-speed'>{city.wind.speed} km/h</p>
<p className='Pressure'>{city.main.pressure} mBar</p>
<p className='visibility'>{city.visibility} m</p>
</div>
</div>

</div>      
        
        )}
</div>
</div>
</>
  )
}
