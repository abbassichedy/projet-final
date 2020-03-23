import axios from 'axios';
import { USER_LOADED } from '../actions/types';
import { setAlert } from './alert';

//. add myself to worker meetings
export const reserveWorker = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.put('/api/users/reservworker', formData, config);
    dispatch(setAlert('Reservation sent', 'success'));
  } catch (error) {
    throw new Error(error);
  }
};
//. add worker to my meetings
export const reserveClient = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.put('/api/users/reservclient', formData, config);
    dispatch(setAlert('Reservation saved', 'success'));
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    throw new Error(error);
  }
};

//.edit meeting infos in worker meetings
export const editReservationWorker = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.put('/api/users/editreservationworker', formData, config);
    dispatch(setAlert('Changes saved', 'success'));
  } catch (error) {
    throw new Error(error);
  }
};
//. edit meeting infos in my meetings
export const editReservationClient = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.put('/api/users/editreservationclient', formData, config);
    dispatch(setAlert('Changes saved', 'success'));
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    throw new Error(error);
  }
};
//. annuler reservation : delete client from worker meetings
export const cancelReservationWorker = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.put('/api/users/deletereservationworker', formData, config);
    dispatch(setAlert('Reservation Cancelled', 'success'));
  } catch (error) {
    throw new Error(error);
  }
};

//. annuler reservation : delete worker from my meetings // annulation from worker
export const cancelReservationClient = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.put('/api/users/deletereservationclient', formData, config);
    dispatch(setAlert('Reservation Cancelled', 'success'));
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    throw new Error(error);
  }
};
//. confirmation in worker meeting
export const confirmReservationWorker = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.put('/api/users/confirmreservationworker', formData, config);
    dispatch(setAlert('Reservation confirmed', 'success'));
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    throw new Error(error);
  }
};
//. confirmation in client meetings
export const confirmReservationClient = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.put('/api/users/confirmreservationworker', formData, config);
    dispatch(setAlert('Confirmation sent', 'success'));
  } catch (error) {
    throw new Error(error);
  }
};

//. refuser reservation : worker: go to client and set status declined
export const declineReservationClient = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.put('/api/users/declinereservationclient', formData, config);
    dispatch(setAlert('Decline sent', 'success'));
  } catch (error) {
    throw new Error(error);
  }
};

//. annuler reservation : delete client from my meetings
export const declineReservationWorker = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };

    const res = await axios.put('/api/users/declinereservationworker', formData, config);
    dispatch(setAlert('Reservation deleted', 'success'));
  } catch (error) {
    throw new Error(error);
  }
};
