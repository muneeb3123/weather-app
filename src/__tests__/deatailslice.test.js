import DetailSlicereducer, { selectCity } from '../redux/details/detailSlice';

describe('DetailSlice reducer', () => {
  it('should update the state with selected city', () => {
    const initialState = { data: [] };
    const city = { weatherImage: 'image.jpg', city: { name: 'London' } };
    const nextState = DetailSlicereducer(initialState, selectCity(city));

    expect(nextState).toEqual({ data: { weatherImage: 'image.jpg', city: { name: 'London' } } });
  });
});
