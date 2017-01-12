import { Map } from 'immutable';
import { ActionTypes } from 'actions/LoadingActions';
import { ActionTypes as ListActionTypes } from 'actions/ListActions';

export const loading = (state = Map().set('isLoading', false), action) => {
  switch(action.type) {
    case ListActionTypes.Fetching:
      return state.set('isLoading', true);

    case ListActionTypes.FetchingComplete:
      return state.set('isLoading', false);

    default:
      return state;
  }
};
