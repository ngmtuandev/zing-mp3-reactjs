import actionDefine from "./actionRedux"

export const setStateRight = (stateRight) => ({
    type: actionDefine.GET_STATE_RIGHT,
    stateRight
})