import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { fetchWeatherData } from './redux/Home/weatherslice';
import Home from './components/Home/Home';
import Details from './components/Details';
import Navbar from './components/Navbar/Navbar';
import './index.css';

function App() {
  const { error, isLoading } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              { isLoading && <div className="heading">Loading....</div> }
              { error && <p className="heading">{error}</p>}
              {!isLoading && !error && <p className="heading">Popular Cities</p>}
              <div className="grid">
                <Home />
              </div>
            </>
                   )}
        />
        <Route
          path="/details"
          element={(
            <div className="detail-page">
              <Details />
            </div>
           )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
