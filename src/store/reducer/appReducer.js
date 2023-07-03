import actionDefine from '../action/actionRedux'
const initState = {
    HomeData: [],
    DataPositive: [],
    stateRight: true,
    chill: [],
    singerTrend: [],
    radio: [],
    isLoadPlayList: false,
    isLoadHome: false
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionDefine.GET_HOME:
            return {
                ...state,
                HomeData: action.dataHome?.find(item => item.sectionType === 'banner') || null,
                DataPositive: action.dataHome?.find(item => item.sectionId === 'hEditorTheme2') || null,
                chill: action.dataHome?.find(item => item.sectionId === 'hEditorTheme') || null,
                singerTrend: action.dataHome?.find(item => item.sectionId === 'hArtistTheme') || null,
                radio: action.dataHome?.find(item => item.sectionId === 'hLiveRadio') || null,
            }
        case actionDefine.GET_STATE_RIGHT: 
            return {
                ...state,
                stateRight: action.stateRight
            }
        case actionDefine.IS_LOADPLAYLIST: 
            return {
                ...state,
                isLoadPlayList: action.isLoadPlayList
            }
        case actionDefine.IS_LOADHOME: 
            return {
                ...state,
                isLoadHome: action.isLoadHome
            }
        default:
            return state
    }
}

export default appReducer