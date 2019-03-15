import {
    LOGIN_START,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from '../actions';
  
  const initialState = {
    error: '',
    errorStatusCode: null,
    fetchingData: false,
    friends: [],
    isLoggingIn: false,
    savingData: false,
    updatingData: false,
    
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START: {
        return {
          ...state,
          isLoggingIn: true
        };
      }
      case FETCH_DATA_START:
        return {
          ...state,
          error: '',
          fetchingData: true
        };
      case FETCH_DATA_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          error: '',
          fetchingData: false,
          gasPrices: action.payload
            .filter(price => price.type === 'Gasoline - Regular')
            .filter(
              price =>
                price.location === 'US' || price.location === 'State of Hawaii'
            )
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          errorStatusCode: action.payload.status
        };
      default:
        return state;
    }
  };
  
  export default reducer;