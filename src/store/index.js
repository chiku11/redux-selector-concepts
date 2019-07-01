import { createStore, combineReducers } from 'redux';
import rootReducer from "../reducers/index";

const reducer = combineReducers({
  form: rootReducer, // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;