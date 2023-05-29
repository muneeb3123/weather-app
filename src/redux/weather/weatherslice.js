import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const cities = ['gujrat', 'islamabad'];
const key = 'fe35aab220ffb69b8fb5eef45d5615d1';
const url = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = createAsyncThunk('weather/fetchData', async () => {
  const requests = cities.map((city) => {
    const params = {
      q: city,
      appid: key,
      units: 'metric',
    };
    return axios.get(url, { params });
  });

  const responses = await Promise.all(requests);
  const weatherData = responses.map((response) => response.data);
  return weatherData;
});

const initialState = {
  data: [],
  isLoading: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchWeatherData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      }))
      .addCase(fetchWeatherData.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

export const { data, isLoading } = weatherSlice.actions;
export default weatherSlice.reducer;
