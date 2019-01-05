import initialState from './initialState';
// import * as types from '../actions/actionTypes';

export default function reposReducer(state = initialState, action) { // {type: , payload}
	switch (action.type) {
		case 'userName': {
			console.log("reducer username:" + action)
			return {
	            ...state,
	            ...action.payload
	        }
		}
		case 'appName': {
			console.log("reducer appName:" + action);
			return {
	            ...state,
	            ...action.payload
	        }
		}
		case 'bothtype':{
			console.log("reducer bothtype:" + action);
			return {
	            ...state,
	            ...action.payload
	        }

		}
		default:
			return state;
	}
}