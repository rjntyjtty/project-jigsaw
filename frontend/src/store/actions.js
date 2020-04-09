import { COMPILE_CODE } from "./action-types";

export function compileCode(payload) {
    return {type: COMPILE_CODE, payload};
}

export default { compileCode };
