import {
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE,
} from "./forecastType";

const initialState = {
  loading: false,
  forecasts: [],
  error: "",
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

    default:
      return state;
  }
};

export default forecastReducer;
