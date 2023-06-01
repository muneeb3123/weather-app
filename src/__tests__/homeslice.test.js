import weatherreducer, { fetchWeatherData } from '../redux/Home/weatherslice';

describe('weatherreducer', () => {
  test('should handle fetchWeatherData.pending', () => {
    const initialState = {
      data: [],
      isLoading: false,
      error: null,
    };
    const action = { type: fetchWeatherData.pending.type };
    const nextState = weatherreducer(initialState, action);

    expect(nextState.isLoading).toBe(true);
    expect(nextState.error).toBe(null);
  });

  test('should handle fetchWeatherData.fulfilled', () => {
    const initialState = {
      data: [],
      isLoading: true,
      error: null,
    };
    const weatherData = [{ city: 'Rome', temperature: 25 }];
    const action = { type: fetchWeatherData.fulfilled.type, payload: weatherData };
    const nextState = weatherreducer(initialState, action);

    expect(nextState.isLoading).toBe(false);
    expect(nextState.data).toEqual(weatherData);
    expect(nextState.error).toBe(null);
  });

  test('should handle fetchWeatherData.rejected', () => {
    const initialState = {
      data: [],
      isLoading: true,
      error: null,
    };
    const errorMessage = 'City not found.';
    const action = { type: fetchWeatherData.rejected.type, error: { message: errorMessage } };
    const nextState = weatherreducer(initialState, action);

    expect(nextState.isLoading).toBe(false);
    expect(nextState.data).toEqual([]);
    expect(nextState.error).toBe(errorMessage);
  });
});
