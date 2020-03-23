import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  // ACCOUNT_DELETED,
  // GET_REPOS,
} from './types';

//. Create profile

export const createProfile = formData => async dispatch => {
  try {
    const config = { hearders: { 'Content-Type': 'application/json' } };
    const res = await axios.post('/api/profile', formData, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert('Profile Created', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//. upload photo
export const uploadPhoto = formData => async dispatch => {
  try {
    const res = await axios.post('/api/resources/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert('Photo Added', 'success'));
    dispatch(getCurrentProfile());
  } catch (err) {
    if (err.response.status === 500) {
      console.log('There was a problem with the server');
    } else {
      console.log(err.response.data.msg);
    }
  }
};

//. Get current user profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me/');
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
//. update hourly rate
export const updateRate = formdata => async dispatch => {
  try {
    const config = { hearders: { 'Content-Type': 'application/json' } };
    const res = await axios.put('/api/profile/me', formdata, config);
    dispatch(setAlert('Rate updated', 'success'));
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    throw new Error(error);
  }
};

//. Get All profiles
export const getWorkers = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get('/api/profile');
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { err },
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//.  Get Profile by user id
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
