import { useEffect, useState } from "react"

function changeCity(city){

  const 

  useEffect(() =>{
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}`)
    .then(res => res.json())
    .then(data => setData(data))
    })
    return data;
}

export default changeCity;