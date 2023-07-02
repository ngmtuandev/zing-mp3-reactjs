import actionDefine from "./actionRedux"

export const setSongCurrent = (idSong) => ({
    type: actionDefine.GET_SONG,
    idCurSong: idSong
})

export const getSongPlay = (playSong) => ({
    type: actionDefine.GET_PLAYSONG,
    playSong
})