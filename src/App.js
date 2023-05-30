import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Details from './components/Details';
import Navbar from './components/Navbar/Navbar';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <p className="heading">Some Cities</p>
              <div className="grid">
                <Home />
              </div>
            </>
          )}
        />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
