import COMPILE_CODE from './action-types'

function rendererMiddleWare({dispatch}) {
    return function(next) {
        return function(action) {
            if (action.type === COMPILE_CODE) {
                // actually don't need this
                // action.payload.code =
                // `'use strict';${action.payload.code}`;
            }
            return next(action);
        }
    }
}

export default rendererMiddleWare;
