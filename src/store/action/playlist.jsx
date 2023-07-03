import actionDefine from "./actionRedux"

export const setPlayList = (playlist) => ({
    type: actionDefine.GET_PLAYLIST,
    playlist
})