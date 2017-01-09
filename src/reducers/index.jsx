import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { loading } from './loading';
import { list } from './list';

const reducers = combineReducers({
  loading,
  routing: routerReducer,
  list,
  form: formReducer
});

export default reducers;
