import React from 'react'
import Info from './Info'
import Search from './Search'
import { useState } from 'react'

const WeatherInfo1 = () => {
    const [weatherInfo,setWeatherInfo]=useState({
        city:"",
        temp:"",
        minTemp:"",
        maxTemp:"",
        humidity:"",
        feels_Like:"",
        weather:""
    });
    const updatedInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
  return (
        <div>
            
            <Search updatedInfo={updatedInfo}/>
            <Info info={weatherInfo}/>

        </div>
  )
}

export default WeatherInfo1