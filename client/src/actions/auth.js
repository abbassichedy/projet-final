import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';
import { getCurrentProfile } from './profile';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from './types';

// Load user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('api/auth/');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    dispatch(getCurrentProfile());
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//  Register User
export const register = ({ email, typeuser, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    email,
    typeuser,
    password,
  });
  console.log('im here');
  try {
    const res = await axios.post('api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.map(error => dispatch(setAlert(error.msg, 'error')));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

// Login user
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const body = JSON.stringify({ email, password });
    const res = await axios.post('/api/auth/', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    await dispatch(loadUser());
  } catch (error) {
    if (error) {
      // console.log(error.response);
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
      }
    }
    // dispatch(setAlert('Please try later', 'error'));
    dispatch({ type: LOGIN_FAIL });
  }
};

// Logout
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });

  dispatch({ type: LOGOUT });
};
