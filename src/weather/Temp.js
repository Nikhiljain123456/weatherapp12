import React ,{useState} from 'react';
import './style.css';
import Tempcard from './Tempcard';
function Temp() {
    const [SearchValue,setSearchvalue] =useState("pune");
    const [tempinfo,seytempinfo] = useState("");

    const getWeatherInfo = async ()=>{
        try {
            let url =`http://api.openweathermap.org/data/2.5/weather?q=${SearchValue}&units=metric&appid=8369c0722e808c282cc103c18ed2b154`
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)

           const temp = data.main.temp;
           const humidity = data.main.humidity;
           const pressure = data.main.pressure;

           const {main:weathermood} = data.weather[0];
           const {name} = data;
           const {speed} = data.wind;
           const {country,sunset} =data.sys;

           const myNewWeatherinfo = {
               temp,
               humidity,
               pressure,
               weathermood,
               name,
               speed,
               country,
               sunset
           }

           seytempinfo(myNewWeatherinfo);


        

        } catch (error) {
            
        }
    }
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder="Search..."
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={SearchValue}
                        onChange={(e)=> setSearchvalue(e.target.value)}
                        
                        ></input>

                    <button className="searchButton" type="button" onClick={getWeatherInfo} >search</button>

                </div>
            </div>

            {/* weather card temd design start */}
           <Tempcard  tempinfo={tempinfo}/>


        </>
    )
}

export default Temp;
