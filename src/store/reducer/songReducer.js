import actionDefine from '../action/actionRedux'

const initState = {
    currSong: null,
    playSong: false,
    playlist: null
}

const songReducer = (state = initState, action) => {
    switch (action.type) {
        case actionDefine.GET_SONG:
            return {
                ...state,
                currSong: action.idCurSong
            }
            
        case actionDefine.GET_PLAYSONG:
            return {
                ...state,
                playSong: action.playSong
            }
        case actionDefine.GET_PLAYLIST:
            return {
                ...state,
                playlist: action.playlist
            }
        
        default:
            return initState
    }
}

export default songReducer