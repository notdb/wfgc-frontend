import axios from "axios";
//import { axiosWithAuth } from "./axiosWithAuth";

export const FETCHING_ARCADES_START = "FETCHING_ARCADES_START";
export const FETCHING_ARCADES_SUCCESS = "FETCHING_ARCADES_SUCCESS";
export const FETCHING_ARCADES_ERROR = "FETCHING_ARCADES_ERROR";

export const arcadesFetcher = () => dispatch => {
  dispatch({ type: FETCHING_ARCADES_START });
  axios
    .get("http://localhost:5000/api/arcades/")
    .then(res => {
      dispatch({ type: FETCHING_ARCADES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_ARCADES_ERROR });
    });
};
