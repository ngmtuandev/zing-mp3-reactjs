import actionDefine from "./actionRedux"
import { getHome } from "../../apis/apiHome"
import { useDispatch } from "react-redux"
import {setLoadHome} from "./isLoadHome"
export const getApiDataHome = () => async (dispatch) => {
    try {
        dispatch(setLoadHome(false))
        const apiGetData = await getHome()
        dispatch(setLoadHome(true))
        if (+apiGetData?.status === 200)
        {
            dispatch({
                type: actionDefine.GET_HOME,
                dataHome: apiGetData.data.data.items
            })
        }
        else {
            dispatch({
                type: actionDefine.GET_HOME,
                dataHome: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionDefine.GET_HOME,
            dataHome: null
        })
    }
}