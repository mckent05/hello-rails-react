import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './GreetingPage/greeting';

const reducer = combineReducers({
  greet: greetingReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;