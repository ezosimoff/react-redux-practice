import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redusers';
import thunk from 'redux-thunk';
import api from '../redux/middleware' 

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, api));

export const store = createStore(rootReducer, enhancer);
