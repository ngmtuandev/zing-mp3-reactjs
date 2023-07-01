import actionDefine from '../action/actionRedux'
const initState = {
    HomeData: []
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionDefine.GET_HOME:
            return {
                ...state,
                HomeData: action.dataHome?.find(item => item.sectionType === 'banner') || null
            }
    
        default:
            return state
    }
}

export default appReducer