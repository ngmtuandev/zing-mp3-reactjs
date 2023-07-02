import { createStore, applyMiddleware } from "redux";
import rootRedux from './store/reducer/reducer'
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const reduxConfig = () => {
    const store = createStore(rootRedux, applyMiddleware(thunk))
    const persistor = persistStore(store)

    return {store, persistor}
}

export default reduxConfig