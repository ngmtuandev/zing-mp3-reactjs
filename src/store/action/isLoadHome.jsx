import actionDefine from "./actionRedux"

export const setLoadHome= (isLoadHome) => ({
    type: actionDefine.IS_LOADHOME,
    isLoadHome
})

export const setChoose = (isChoose) => ({
    type: actionDefine.SET_CHOOSE,
    isChoose
})