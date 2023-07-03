import actionDefine from "./actionRedux"

export const setPlayList = (playlist) => ({
    type: actionDefine.GET_PLAYLIST,
    playlist
})

export const setLoadPlayList = (isLoadPlayList) => ({
    type: actionDefine.IS_LOADPLAYLIST,
    isLoadPlayList
})