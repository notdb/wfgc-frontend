import {
  FETCHING_ARCADES_START,
  FETCHING_ARCADES_SUCCESS,
  FETCHING_ARCADES_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REG_START,
  REG_SUCCESS,
  REG_ERROR
} from "../actions";

const initialState = {
  arcades: [],
  fetching_arcades: false,
  isLoggedIn: false,
  isRegistered: false
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
    case LOGIN_START:
      return {
        ...state,
        isloggedIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        error: ""
      };
    case REG_START:
      return {
        ...state,
        isRegistered: true,
        error: ""
      };
    case REG_SUCCESS:
      return {
        ...state,
        isRegistered: false,
        error: ""
      };
    default:
      return state;
  }
};

export default reducer;
