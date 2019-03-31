import {
    FAKE_TYPE_1,
    FAKE_TYPE_2
} from '../actions/types';

const initialState = {
    someFakeInfo: null,
    moreFake: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FAKE_TYPE_1:
            return {
                ...state,
                someFakeInfo: action.payload
            };
        case FAKE_TYPE_2:
            return {
                ...state,
                moreFake: true
            };
        default:
            return state;
    }
}