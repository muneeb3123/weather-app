import { configureStore } from '@reduxjs/toolkit';
import weatherreducer from './Home/weatherslice';
import DetailSlicereducer from './details/detailSlice';

const store = configureStore({
  reducer: {
    weather: weatherreducer,
    Details: DetailSlicereducer,
  },
});

export default store;
