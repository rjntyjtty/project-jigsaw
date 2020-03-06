import { COMPILE_CODE } from "./action-types";

function compileCode(payload) {
    return {type: COMPILE_CODE, payload};
}

export default compileCode;