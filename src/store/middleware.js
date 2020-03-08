import COMPILE_CODE from './action-types'

function rendererMiddleWare({dispatch}) {
    return function(next) {
        return function(action) {
            if (action.type === COMPILE_CODE) {
                action.payload.code =
                `"use strict";
                ${action.payload.code}`
            } else {
                 return next(action);
            }
        }
    }
}

export default rendererMiddleWare;