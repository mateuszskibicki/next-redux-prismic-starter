import {
    FAKE_TYPE_1,
    FAKE_TYPE_2
} from '../actions/types';

const initialState = {
    someFakeInfo: null,
    moreFake: []
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
                moreFake: action.payload
            };
        default:
            return state;
    }
}