import React from 'react';
import { useSelector } from 'react-redux';
import { WiHumidity } from 'react-icons/wi';
import { RiWindyFill } from 'react-icons/ri';
import { FaTachometerAlt, FaEye } from 'react-icons/fa';
import './Details.css';

function Details() {
  const { data } = useSelector((state) => state.Details);

  return (
    <>
      {data && data.city ? (
        <div className="details-main">
          <div className="upper">
            <p className="country-city">
              {data.city.name}
              ,
              {data.city.sys.country}
            </p>
            <div className="img-temp">
              <div className="temp-condition">
                <span className="temperature-details">
                  {data.city.main.temp}
                  &deg;C
                </span>
                <span className="condition-details">
                  {data.city.weather[0].description}
                </span>
              </div>
              <span className="img-container">
                <img
                  className="details-image"
                  src={data.weatherImage}
                  alt="name"
                />
              </span>
            </div>
          </div>
          <div className="lower">
            <div className="humidity">
              <p className="lower-header">
                <WiHumidity className="Icons" />
                Humidity
              </p>
              <span className="lower-value">
                {data.city.main.humidity}
                %
              </span>
            </div>
            <div className="humidity">
              <p className="lower-header">
                <RiWindyFill className="Icons" />
                wind
              </p>
              <span className="lower-value">
                {data.city.wind.speed}
                %
              </span>
            </div>
            <div className="humidity">
              <p className="lower-header">
                <FaTachometerAlt className="Icons" />
                Pressure
              </p>
              <span className="lower-value">
                {data.city.main.pressure}
                (hPa)
              </span>
            </div>
            <div className="humidity">
              <p className="lower-header">
                <FaEye className="Icons" />
                Visibility
              </p>
              <span className="lower-value">
                {data.city.visibility}
                m
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-data">Please go back or search city.</div>
      )}
    </>
  );
}

export default Details;
