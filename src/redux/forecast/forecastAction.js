import {
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE,
} from "./forecastType";

export const fetchForecasts = () => {
  return (dispatch) => {
    dispatch(fetchForecastsRequest());

    return fetch(
      "api.openweathermap.org/data/2.5/forecast?q=Rome&appid=9100cdffa778426097e9dcee8b4507cd"
    )
      .then((response) => response.json())
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
