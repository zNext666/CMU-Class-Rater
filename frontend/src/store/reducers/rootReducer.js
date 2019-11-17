import authReducer from './authReducer'
import registerReducer from './registerReducer'
import pageReducer from './pageReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    page: pageReducer
})
export default rootReducer