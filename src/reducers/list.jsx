import { ActionTypes } from 'actions/ListActions';

export const list = (state = {items: ["first"]}, action) => {
  switch(action.type) {
    case ActionTypes.Add:
      console.log('ListAction:Add');
      console.log(action);
      console.log('ExistingState:', state);
      var newItems = state.items.concat(action.item);
      return Object.assign({}, {items: newItems });
      break;
    case ActionTypes.Fetch:
      return state;
      break;
    case ActionTypes.Populate:
      if(state.length === 0) {
        state = action.list;
      } else {
        state = state.concat(action.list);
      }

      return state;
      break;
    default:
      return state;
      break;
  }
};
