import appRecuder from './appReducer'
import {combineReducers} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import songReducer from './songReducer'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'

const commonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2
}

const persistConfig = {
  ...commonConfig,
  key: 'songplay',
  whitelist: ['currSong', 'playSong']
}


const rootRedux = combineReducers({
  app: appRecuder,
  music: persistReducer(persistConfig, songReducer)
})

export default rootRedux