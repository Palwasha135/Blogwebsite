import React, { useState } from 'react'
import axios from 'axios'

import WeatherCard from './WeatherCard'


const Home = () => {

  
  let [cityName,setCityName] = useState("")
  let [data,setData] = useState(null)
  let [searchedCity, setSearchedCity] = useState('');
  let SubmitHandler =async (e) =>{
    e.preventDefault()
    console.log('I am a function')

    try{
  let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=15ad795a4a5de658bacd9b6460a8806a&units=metric`)
  // console.log("response",response) //user ko agar hamay koi cheez nh dekhani ho aur 
 setData(response.data.list[0])
 setSearchedCity(cityName);
  //us cheez ko test krna ho 
    } catch(error){
console.log("error",error)
    }
  }
  return (
 <div className='text-center max-w-xs mx-auto pt-24 text-white sm:text-lg md:text-xl lg:text-2xl '>
     
      <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden">
        <div className="w-32 h-32 rounded-full bg-color absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
        <div className="w-32 h-32 rounded-full bg-color absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
   
      
    </div>
 <h1 className='mb-5'>Weather App</h1>
 <form onSubmit={SubmitHandler}>
<input className=' block p-2 w-full text-black ' type='text' onChange={(e) => setCityName(e.target.value)
 } 
 placeholder='Your City' />
<button type='submit' className='search-color text-white rounded px-9  py-2 block mx-auto mt-3'>Search</button>
 </form>
 
   {searchedCity && (
    <div className='container bg-color mt-4 rounded-5 p-2 max-w-sm px-6'>
      <h1>{searchedCity}</h1>
      {data && <WeatherCard  />}
     
          <p className="text-3xl"> {data.main.temp} °C</p>
           <p className="text-2xl">{data.weather[0].main}</p>
          <p className="text-xl">Humidity: {data.main.humidity} %</p>
          
    </div>
)
}
   
 </div>
  )
}

export default Home