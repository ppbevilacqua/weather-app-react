import {
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE,
} from "./forecastType";
import { manageDataFetched } from "./manageDataFetched";

export const fetchForecasts = () => {
  return (dispatch) => {
    dispatch(fetchForecastsRequest());

    return fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=Roma,IT&units=metric&appid=" +
        process.env.REACT_APP_WEATHER_API_KEY
    )
      .then((response) => response.json())
      .then((forecasts) => {
        return manageDataFetched([forecasts]);
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
