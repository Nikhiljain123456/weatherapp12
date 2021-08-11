import React from 'react';
import './style.css';

function Temp() {
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder="Search..."
                        autoFocus
                        id="search"
                        className="searchTerm" ></input>

                    <button className="searchButton">search</button>

                </div>
            </div>

            {/* weather card temd design start */}
            <article className="widget">
                <div className="weatherIcon">
                    <i className={"wi wi-day-sunny"}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>25.5</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition"> sunny</div>
                        <div className="place">pune,india</div>
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
                                19:11pm <br></br>
                                sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className="wi wi-humidity"></i></p>
                            <p className="extra-info-leftside">
                                19:11pm <br></br>
                                humidity
                            </p>
                        </div>

                    </div>

                    <div className="weather-extra-info">
                    <div className="two-sided-section">
                            <p><i className="wi wi-rain"></i></p>
                            <p className="extra-info-leftside">
                                19:11pm <br></br>
                                pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className="wi wi-strong-wind"></i></p>
                            <p className="extra-info-leftside">
                                19:11pm <br></br>
                                speed
                            </p>
                        </div>


                    </div>

                </div>

            </article>



        </>
    )
}

export default Temp;
