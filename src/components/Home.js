import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchWeatherData } from '../redux/weather/weatherslice';

function Home() {
  const navigate = useNavigate();
  const { data, isLoading } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading......</div>; // Added return statement
  }

  return data.map((city) => (
    <div
      tabIndex={0}
      onClick={() => navigate('/details')}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          navigate('/details');
        }
      }}
      role="button"
      className="main"
      key={city.id}
    >
      <h1 className="name">{city.name}</h1>
      <h2 className="country">{city.sys.country}</h2>
    </div>
  ));
}

export default Home;
