import { COMPILE_CODE } from './action-types';

const initialState = {
    code: null,
    debug: true
};

function rootReducer(state=initialState, action) {
    if (action.type === COMPILE_CODE) {
        state = Object.assign({}, state, {code: action.payload.code});
    }
    return state;
}

export { rootReducer };
