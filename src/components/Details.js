import React from 'react';
import { useSelector } from 'react-redux';
import './Details.css';

function Details() {
  const { data } = useSelector((state) => state.Details);

  return (
    <>
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
                {data.city.weather[0].main}
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
          <h1>Temerature lists</h1>
        </div>
      </div>
    </>
  );
}

export default Details;
