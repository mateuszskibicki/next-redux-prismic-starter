import axios from 'axios';

import {
	FAKE_TYPE_1,
	FAKE_TYPE_2
} from '../actions/types';

export const setFake1 = (argument) => dispatch => {
	// dispatch(setMapLoading());
	// axios.get(`/api/maps/location/${encodedAddress}`)
	// 	.then(res => dispatch({type: GET_MAPS, payload: res.data }))
    // 	.catch(err => dispatch({type: GET_ERRORS, payload: err.response.data}));
    dispatch({type: FAKE_TYPE_1, payload: argument})
};

// Set loading state
export const setFake2 = () => async dispatch => {
	//https://aws.random.cat/meow {file: .....}
	//https://random.dog/woof.json {url: .....}
	const photoURL = await axios.get('https://random.dog/woof.json')
	dispatch({type: FAKE_TYPE_2, payload: photoURL.data.url})
};