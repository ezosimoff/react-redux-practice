import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import sortReducer from './sortReducer';

const rootReducer = combineReducers({
	fetchReducer,
	sortReducer,
});

export default rootReducer