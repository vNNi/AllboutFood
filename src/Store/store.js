import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../Reducers/index';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
const initalState = {};

const middleware = [thunk, routerMiddleware(history)];

const store = createStore(rootReducers(history), initalState, compose(applyMiddleware(...middleware)));

export default store;