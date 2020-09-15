import {
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE,
} from "./forecastType";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const fetchForecasts = () => {
  return (dispatch) => {
    dispatch(fetchForecastsRequest());

    return fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=41.9109&lon=12.4818&exclude=current,minutely,hourly&units=metric&appid=" +
        process.env.REACT_APP_WEATHER_API_KEY
    )
      .then((response) => response.json())
      .then((forecasts) => {
        return forecasts.daily.map((daily) => {
          // conversione data da timestamp in secondi a giorno della settimana
          const timestamp = daily.dt;
          const weekDayIndex = new Date(timestamp * 1000).getDay();
          const day = days[weekDayIndex];

          // temperatura minima e massima
          const { min, max } = daily.temp;

          // descizione previsione e indice dell'icona
          const { description, icon } = daily.weather[0];

          return {
            key: timestamp,
            day,
            min,
            max,
            description,
            icon,
          };
        });
      })
      .then((forecasts) => dispatch(fetchForecastsSuccess(forecasts)))
      .catch((error) => dispatch(fetchForecastsError(error.message)));
  };
};

export const fetchForecastsRequest = () => {
  return {
    type: FETCH_FORECAST_REQUEST,
  };
};

export const fetchForecastsSuccess = (forecasts) => {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload: forecasts,
  };
};

export const fetchForecastsError = (error) => {
  return {
    type: FETCH_FORECAST_FAILURE,
    payload: error,
  };
};
