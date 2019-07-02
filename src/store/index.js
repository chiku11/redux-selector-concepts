import { createStore, combineReducers } from 'redux';
import rootReducer from "../reducers/index";

const reducer = combineReducers({
  form: rootReducer, // mounted under "form"
});
const store = (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(reducer);

export default store;