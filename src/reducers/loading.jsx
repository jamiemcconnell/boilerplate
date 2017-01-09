import { ActionTypes } from 'actions/LoadingActions';

export const setLoading = (state, action) => {
  return Object.assign({}, state, {
    loading: action.loading
  });
};

export const loading = (state = { loading: false }, action) => {
  switch(action.type) {
    case ActionTypes.Loading:
      return setLoading(state, action);
      break;
    default:
      return state;
  }
};
