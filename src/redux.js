import { createStore, applyMiddleware } from "redux";
import rootRedux from './store/reducer/reducer'
import thunk from "redux-thunk";
const reduxConfig = () => {
    const store = createStore(rootRedux, applyMiddleware(thunk))
    return store
}

export default reduxConfig