import { combineReducers } from "redux";
import paramsReducer from './paramsReducer';
import resultReducer from './resultReducer';

const reducers = combineReducers({
  params: paramsReducer,
  result: resultReducer
});

export default reducers;