import actionDefine from "./actionRedux"
import {getApiSearch} from '../../apis/apiSearch'
export const getDataApiSearch = (keyword) => (dispatch) => new Promise( async (resolve, reject) => {
    try {
        const rs = await getApiSearch(keyword)   
        if (rs?.status === 200) {
            dispatch({
                type: actionDefine.GET_SEARCH,
                dataSearch: rs
            })
        }
        else {
            dispatch({
                type: actionDefine.GET_SEARCH,
                dataSearch: rs
            })
        }
    } catch (error) {
        dispatch({
            type: actionDefine.GET_SEARCH,
            dataSearch: null
        })
    }
})