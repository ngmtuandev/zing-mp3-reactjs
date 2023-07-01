import actionDefine from "./actionRedux"
import { getHome } from "../../apis/apiHome"
export const getDataHome = () => async (dispatch) => {
    try {
        const apiGetData = await getHome()
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