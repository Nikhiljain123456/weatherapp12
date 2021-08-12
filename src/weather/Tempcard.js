import React, {useState,useEffect}from 'react'


function Tempcard({tempinfo}) {
    const[weatherstate,setweatherstate] = useState("")
    const {
                temp,
               humidity,
               pressure,
               weathermood,
               name,
               speed,
               country,
               sunset
    } = tempinfo;

    useEffect(() => {
        if(weathermood){
            switch(weathermood){
                case "Cloudy" :setweatherstate("wi-day-cloudy")
                break;
                case "Haze" :setweatherstate("wi-day-haze")
                break;
                case "clear" :setweatherstate("wi-day-sunny")
                break;

                default:
                    setweatherstate("wi-day-sunny")
            }
        }
      
    }, [weathermood])

    let sec = sunset;
    let date = new Date(sec*1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`
    console.log(tempinfo.temp);
    return (
        <>
             <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherstate}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name},{country}</div>
                    </div>

                </div>

                <div className="date">
                    {new Date().toLocaleString()}
                </div>
                {/* four coulmn section design start */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className="wi wi-sunset"></i></p>
                            <p className="extra-info-leftside">
                               {timestr}pm<br></br>
                                sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className="wi wi-humidity"></i></p>
                            <p className="extra-info-leftside">
                               {humidity} <br></br>
                               humidity
                            </p>
                        </div>

                    </div>

                    <div className="weather-extra-info">
                    <div className="two-sided-section">
                            <p><i className="wi wi-rain"></i></p>
                            <p className="extra-info-leftside">
                               {pressure} <br></br>
                               pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className="wi wi-strong-wind"></i></p>
                            <p className="extra-info-leftside">
                               {speed} <br></br>
                               speed
                            </p>
                        </div>


                    </div>

                </div>

            </article>

        </>
    )
}

export default Tempcard
