import {
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE,
  GET_DAILY_DETAILS_BY_DATE,
  CHANGE_LOCATION,
} from "./forecastType";

const initialState = {
  loading: false,
  forecasts: [],
  error: "",
  dailyDetails: {},
  location: "",
  locationToFetch: "",
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORECAST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        loading: false,
        forecasts: action.payload.forecasts,
        location: action.payload.location,
        locationToFetch: "",
      };

    case FETCH_FORECAST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_DAILY_DETAILS_BY_DATE:
      return {
        ...state,
        dailyDetails: action.payload,
      };

    case CHANGE_LOCATION:
      return {
        ...state,
        locationToFetch: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};

export default forecastReducer;
