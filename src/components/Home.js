import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { fetchWeatherData } from '../redux/weather/weatherslice';

function Home() {
  const { data, isLoading } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  if (isLoading) {
    <div>Loading......</div>;
  }

  // const navigate = useNavigate();
  return data.map((city) => (
    <div className="main" key={city.name}>
      <h1 className="name">{city.name}</h1>
      <h2 className="country">{city.sys.countery}</h2>
    </div>
  ));
}

export default Home;
