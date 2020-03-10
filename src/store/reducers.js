import { COMPILE_CODE } from './action-types';

const initialState = {
    code: null,
    createScene: null
};

function rootReducer(state=initialState, action) {
    if (action.type === COMPILE_CODE) {
        if (state.code !== action.payload.code) console.log("code has changed, updating state");
        state = Object.assign({}, state, {code: action.payload.code});
    }
    return state;
}

export { rootReducer };
