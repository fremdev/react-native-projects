import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    email
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    password
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => dispatch({
        type: 'LOGIN_USER_SUCCESS',
        user
      }));
  };
};
