import { List } from 'immutable';
import { ActionTypes } from 'actions/ListActions';

export const list = (state = List(), action) => {

  switch(action.type) {
    case ActionTypes.Add:
      return state.push(action.item);

    case ActionTypes.FetchingComplete:
      return state.concat(action.items);

    default:
      return state;
  }

};
