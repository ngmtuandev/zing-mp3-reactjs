import actionDefine from '../action/actionRedux'

const initState = {
    currSong: null,
    playSong: false
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
        
        default:
            return initState
    }
}

export default songReducer