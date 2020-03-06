import React from 'react'
import { COMPILE_CODE } from './action-types';

const initialState = {
    code: null
};

function rootReducer(state=initialState, action) {
    if (action.type === COMPILE_CODE) {
        state.code = action.payload;
    }
    return state;
}

export { rootReducer }