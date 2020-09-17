import {
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE,
  GET_DAILY_DETAILS_BY_DATE,
} from "./forecastType";
import { manageDataFetched } from "./manageDataFetched";

let forecastsData;

export const fetchForecasts = () => {
  return (dispatch) => {
    dispatch(fetchForecastsRequest());

    return forecastsData
      ? forecastsData
      : fetch(
          "https://api.openweathermap.org/data/2.5/forecast?q=Roma,IT&units=metric&appid=" +
            process.env.REACT_APP_WEATHER_API_KEY
        )
          .then((response) => response.json())
          .then((forecasts) => {
            forecastsData = forecasts;
            const structuredData = manageDataFetched([forecasts]);

            // settaggio nello state del dettaglio giornaliero del primo giorno
            dispatch(getDailyDetails(structuredData[0].id));

            return structuredData;
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

export const getDailyDetails = (date) => {
  const dailyDetails = forecastsData.list
    ? forecastsData.list.filter((data) => data.dt_txt.includes(date))
    : undefined;

  return {
    type: GET_DAILY_DETAILS_BY_DATE,
    payload: dailyDetails,
  };
};
