import actionDefine from '../action/actionRedux'
const initState = {
    HomeData: [],
    DataPositive: [],
    stateRight: true
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionDefine.GET_HOME:
            return {
                ...state,
                HomeData: action.dataHome?.find(item => item.sectionType === 'banner') || null,
                DataPositive: action.dataHome?.find(item => item.sectionId === 'hEditorTheme2') || null
            }
        case actionDefine.GET_STATE_RIGHT: 
            return {
                ...state,
                stateRight: action.stateRight
            }
    
        default:
            return state
    }
}

export default appReducer