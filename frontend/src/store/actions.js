import { COMPILE_CODE, TOGGLE_DEBUG } from "./action-types";

function compileCode(payload) {
    return {type: COMPILE_CODE, payload};
}

function toggleDebug(payload) {
    return {type: TOGGLE_DEBUG, payload}
}

export default compileCode;