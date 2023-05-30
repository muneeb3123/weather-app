import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { fetchWeatherData } from '../../redux/Home/weatherslice';
import { selectCity } from '../../redux/details/detailSlice';
import clear from '../../assets/clear.png';
import clouds from '../../assets/clouds.png';
import drizzle from '../../assets/drizzle.png';
import dust from '../../assets/dust.png';
import fog from '../../assets/fog.png';
import haze from '../../assets/haze.png';
import mist from '../../assets/mist.png';
import rain from '../../assets/rain.png';
import smoke from '../../assets/smoke.png';
import snow from '../../assets/snow.png';
import thunderstorm from '../../assets/thunderstorm.png';

const weatherImages = {
  clear,
  clouds,
  drizzle,
  dust,
  fog,
  haze,
  mist,
  rain,
  smoke,
  snow,
  thunderstorm,
};

function Home() {
  const navigate = useNavigate();
  const { data, isLoading } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading......</div>;
  }

  const ClickHandler = (city) => {
    dispatch(selectCity(city));
    navigate('/details');
  };

  return (
    <>
      {data.map((city) => {
        const weatherCondition = city.weather[0].main.toLowerCase();
        const weatherImage = weatherImages[weatherCondition];
        return (
          <div
            className="home-main"
            tabIndex={0}
            onClick={() => ClickHandler(city)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                navigate('/details');
              }
            }}
            role="button"
            key={city.id}
          >
            <div className="img-tem">
              <span>
                <img
                  className="weather-logo"
                  src={weatherImage}
                  alt={city.name}
                />
              </span>
              <div className="tem-condition">
                <p className="temperature">
                  {city.main.temp}
                  <sup className="small">°c</sup>
                </p>
                <p className="condition">{city.weather[0].main}</p>
              </div>
            </div>
            <div className="city-country">
              <p className="name">{city.name}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Home;
