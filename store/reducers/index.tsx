import { combineReducers } from 'redux';
import { common } from './common';
import { search } from './search';

export default combineReducers({
	common,
	search,
});
