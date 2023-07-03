import actionDefine from "./actionRedux"

export const setLoadHome= (isLoadHome) => ({
    type: actionDefine.IS_LOADHOME,
    isLoadHome
})