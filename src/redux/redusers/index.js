import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import catsReducer from './catsReducer';

const rootReducer = combineReducers({
	catsReducer,
	fetchReducer,
});

export default rootReducer