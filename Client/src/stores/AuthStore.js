import actionTypes from './types';

export const loadUserAction = (user) => ({
  type: actionTypes.LOAD_USER,
  user,
});

export const removeUserAction = () => ({
  type: actionTypes.REMOVE_USER,
});

const initialState = {
  user: null,
};

const authReducer = (state = initialState, { type, user }) => {
  switch (type) {
    case actionTypes.LOAD_USER:
      return { ...state, ...user };
    case actionTypes.REMOVE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
