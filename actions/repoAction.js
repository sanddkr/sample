import axios from 'axios';



export function setUserName(userName) {
	return function(dispatch) {
		return dispatch({
			type: 'userName',
			payload: {
				userName
			}
		});
	}
	
}

export function setAppName(appName) {
	return function(dispatch) {
		return dispatch({
			type: 'appname',
			payload: {
				appName
			}
		});
	}
}

export function setBothName(userName,appName) {
	return function(dispatch) {
		return dispatch({
			type: 'bothtype',

			payload: {
				userName,
				appName
			}
		});
	}
}
