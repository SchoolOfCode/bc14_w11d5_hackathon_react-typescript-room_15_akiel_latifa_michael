import { get } from "http"
import React, {useState, useEffect} from "react"

type searchLocationProps = {
    searchLocation: string
}

function TemperatureInfo(props:searchLocationProps){

const {searchLocation} = props

console.log(searchLocation)

// write api call here to get temperature info

// make a usestate for saving temperature info
const [temperatureInfo, setTemperatureInfo] = React.useState<any>(null)

// put everything in a useEffect
useEffect(()=>{
async function getTemperatureInfo(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=3e43337fb85b3147a6f53b4009e28316`)
    const data = await response.json()
    console.log(data)
    setTemperatureInfo(data)
    return data
}
getTemperatureInfo()
},[searchLocation])

return (
    <div> {temperatureInfo && (
        <h2>{temperatureInfo.main.temp}</h2>
    )}
    </div>
)
    
}



export default TemperatureInfo