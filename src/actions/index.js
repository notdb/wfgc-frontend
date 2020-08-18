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

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const admin = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/auth/login", creds)
    .then(res => {
      console.log(res.data.token + "aaa");
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => console.log(err));
};

export const REG_START = "REG_START";
export const REG_SUCCESS = "REG_SUCCESS";
export const REG_ERROR = "REG_ERROR";

export const regStart = creds => dispatch => {
  dispatch({ type: REG_START });
  return axios
    .post("http://localhost:5000/api/auth/register", creds)
    .then(res => {
      console.log(res.data.token + "bbb");
      dispatch({ type: REG_SUCCESS, payload: res.data.token });
    })
    .catch(err => console.log(err));
};
