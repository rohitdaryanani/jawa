export const GET_WEATHER = 'GET_WEATHER';

export const getWeather = () => {
  console.log('action');
  return {
    type: GET_WEATHER,
    payload: 'test'
  };
};
