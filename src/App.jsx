 
//import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import'./App.css'
import axios from 'axios'
function App() {
    const[d,setData]=useState({})
    const[location,setLocation]=useState('')
    const [wait,setwait]=useState(false)
    
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=076feda9764cddac4a7d188b769a9231`
    const searchLocation =(event)=>{
      if(event.key==='Enter'){
        setwait(true)
        axios.get(url).then((response)=>{//then to wait the data then run the code
          setData(response.data)
          setwait(false)
          console.log(response.data)//ي الconsollالdataفللتاكد انو 
       
        })
        setLocation('')
      }
    }
    return (
    <>
   
     <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event=>setLocation(event.target.value)}
        onKeyDown={searchLocation}
        type="text" 
        placeholder='Enter Location'/>
      </div>
      {wait&&<p style={{"textAlign":"center"}}>Loading..</p>}
      <div className="container">
        <div className="top">
          <div className="Location">
            {d.name &&<p>{d.name}</p>}
          </div>
          <div className="temp">
          {d.main && <h1>{d.main.temp.toFixed()}℃</h1>}
          </div>
          <div className="description">
            {d.weather&&<p>{d.weather[0].description}</p>}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
          {d.main&&<p>{d.main.feels_like.toFixed()}℃</p>}
            <p>Feels like</p>
          </div>
          <div className="humidity">
          {d.main&&<p>{d.main.humidity}%</p>}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {d.wind&&<p className='bold'>{d.wind.speed}KPH</p>}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
