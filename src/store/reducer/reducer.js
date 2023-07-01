import appRecuder from './appReducer'
import {combineReducers} from 'redux'

const rootRedux = combineReducers({
  app: appRecuder
})

export default rootRedux