import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { loading } from '../components/Loading/LoadingReducers';

const reducers = combineReducers({
  loading,
  routing: routerReducer
});

export default reducers;
