import authReducer from './authReducer'
import registerReducer from './registerReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer
})
export default rootReducer