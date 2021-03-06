import { createStore, combineReducers,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { portfolioReducer } from './reducer/portfolioReducers'
import {userLoginReducer,userRegisterReducer} from './reducer/userReducer'



const userInfoFromStorage = localStorage.getItem('candelebraUserInfo')?JSON.parse(localStorage.getItem('candelebraUserInfo')):null
const initialState = {
    userLogin:{userInfo:userInfoFromStorage}
}
const reducers = combineReducers({
    userPortfolio:portfolioReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer
})

const middleware=[thunk]

const store=createStore(reducers,initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store