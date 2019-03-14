// import {
    
//   } from "../actions";
  
  const initialState = {
    // isLoading: false,
    // photoOfTheDay: null,
    // error: ""
  };
  
  // STEP IV - Handle the START action - it should return the new state
  // tree with isLoading: true, so that our UI transitions to the loading
  // state (Don't forget to add an isLoading bool to the initial state tree)
  function reducer(state = initialState, action) {
    console.log("reducer", action);
    // switch (action.type) {
    //   case FETCH_PHOTO_START:
    //     return {
    //       ...state,
    //       error: "",
    //       isLoading: true
    //     };
    //   case FETCH_PHOTO_SUCCESS:
    //     return {
    //       ...state,
    //       error: "",
    //       isLoading: false,
    //       photoOfTheDay: action.payload
    //     };
    //   case FETCH_PHOTO_FAILURE:
    //     return {
    //       ...state,
    //       error: "",
    //       isLoading: false,
    //       error: action.payload
    //     };
    //   default:
    //     return state;
    // }
  }
  
  export default reducer;