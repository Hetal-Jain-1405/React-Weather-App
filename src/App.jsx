import { useState} from 'react'

const API_Key = import.meta.env.VITE_API_Key

function App() {
  
  const [city, setCity] = useState("")

  const [data, setData] = useState(false)
  let [day, setDay] = useState("Day")

  const response = () => {
      fetch(`http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}`)
      .then(res => res.json())
      .then((data) => {setData(data); console.log(data)})
      if (data?.current?.is_day == 0) {
        setDay("Night")
      }

}

  return (
    <div className="flex flex-col items-center gap-5 bg-black">
      <h1 className='text-4xl text-white font-bold '>Weather App</h1>
      <div className='flex flex-row items-center gap-5 m-4 p-2 '>
        <div className='w-100 h-150 m-4 p-4 bg-pink-800 text-center flex flex-col items-center gap-10 rounded-lg'>
          <div>
            <h1 className='text-2xl text-white font-bold p-3 m-2'>Search for a city: </h1>
            <div>
              <input 
              value={city}
              type="text" 
              className='ml-2 p-2 rounded border-2 border-black' 
              placeholder='Enter city name'
              onChange={(e) => {setCity(e.target.value)}}
               />
              <button 
              onClick={response}
              className='ml-2 p-2 bg-pink-500 text-white rounded border-1 border-white'>Search</button>
            </div>
          </div>
          
          <img src='https://cdn.weatherapi.com/weather/128x128/day/116.png' 
          className='p-2 m-2'/>
          <div>
            <h1 className='text-5xl text-white'>{data?.current?.temp_c || "0"}</h1>
            <h1 className='text-2xl text-white '>{data?.current?.condition?.text || "-"}</h1>
            <h1 className='text-3xl text-white font-bold'>{data?.location?.name || "-"}</h1>
          </div>
          

        </div>
        { data && <div className='w-100 h-150 m-4 p-4 bg-pink-800 flex flex-col items-center gap-3 rounded-lg'>
            <h1 className='text-2xl text-white font-bold p-2 m-1'>Weather details</h1>
            <div className='flex flex-col items-center gap-12'>
              <h1 className='text-2xl text-pink-300 text-center'>{data.current.temp_c || "0"} | {data.current.condition.text || "-"} | {data.location.name || "-"}</h1>
              <div className='flex flex-row gap-25 '>
                <div>
                  <h1 className='text-2xl text-white p-2 m-1'>Day/Night</h1>
                  <h1 className='text-2xl text-white p-2 m-1'>Temp in °F</h1>
                  <h1 className='text-2xl text-white p-2 m-1'>Humidity</h1>
                  <h1 className='text-2xl text-white p-2 m-1'>Wind</h1>
                  <h1 className='text-2xl text-white p-2 m-1'>Direction</h1>
                  <h1 className='text-2xl text-white p-2 m-1'>Dewpoint</h1>
                  <h1 className='text-2xl text-white p-2 m-1'>Pressure</h1>
                </div>
                <div>
                <h1 className='text-2xl text-white p-2 m-1'>{day}</h1>
                <h1 className='text-2xl text-white p-2 m-1'>{data.current.temp_f || "-"}</h1>
                <h1 className='text-2xl text-white p-2 m-1'>{data.current.humidity || "-"}</h1>
                <h1 className='text-2xl text-white p-2 m-1'>{data.current.wind_kph  || "-"}</h1>
                <h1 className='text-2xl text-white p-2 m-1'>{data.current.wind_dir || "-"}</h1>
                <h1 className='text-2xl text-white p-2 m-1'>{data.current.dewpoint_c || "-"}</h1>
                <h1 className='text-2xl text-white p-2 m-1'>{data.current.pressure_in || "-"}</h1>

                </div>
              </div>
            </div>
        </div>}
      </div>
      

      
    </div>
  )
}

export default App
