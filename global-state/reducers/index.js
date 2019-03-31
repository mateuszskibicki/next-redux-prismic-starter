import { combineReducers } from 'redux';
import fakeReducer from './fakeReducer';

export default combineReducers({
	fake: fakeReducer
});