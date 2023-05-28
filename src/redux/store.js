import { configureStore } from '@reduxjs/toolkit';
import weatherreducer from './weather/weatherslice';

const store = configureStore({
  reducer: {
    weather: weatherreducer,
  },
});

export default store;
