import {
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE,
  GET_DAILY_DETAILS_BY_DATE,
} from "./forecastType";

const initialState = {
  loading: false,
  forecasts: [],
  error: "",
  dailyDetails: {},
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
        forecasts: action.payload,
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

    default:
      return state;
  }
};

export default forecastReducer;
