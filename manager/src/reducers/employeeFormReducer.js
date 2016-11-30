import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
 } from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.data.prop]: action.data.value };
    case EMPLOYEE_CREATE:
      return initialState;
    case EMPLOYEE_SAVE_SUCCESS:
      return initialState;
    case EMPLOYEE_DELETE_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
