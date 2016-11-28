import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

export default (state = { email: '', password: '' }, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.email };
    case PASSWORD_CHANGED:
      return { ...state, password: action.password };
    default:
      return state;
  }
};
