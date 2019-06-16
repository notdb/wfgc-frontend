import {
  FETCHING_ARCADES_START,
  FETCHING_ARCADES_SUCCESS,
  FETCHING_ARCADES_ERROR
} from "../actions";

const initialState = {
  arcades: [],
  fetching_arcades: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ARCADES_START:
      return {
        ...state,
        fetching_arcades: true,
        error: ""
      };
    case FETCHING_ARCADES_SUCCESS:
      return {
        ...state,
        fetching_arcades: false,
        arcades: action.payload
      };
    case FETCHING_ARCADES_ERROR:
      return {
        ...state,
        fetching_arcades: false,
        error: ""
      };
    default:
      return state;
  }
};

export default reducer;
