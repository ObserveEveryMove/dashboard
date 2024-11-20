import {legacy_createStore as createStore, combineReducers} from 'redux'

import loginRegisterReducer from './reducers/loginRegisterReducer'
import pomReducer from './reducers/pomReducer'


const rootReducer = combineReducers({
  login: loginRegisterReducer,
  pom: pomReducer,
})


const store = createStore(rootReducer)

store.subscribe(()=> {
    // console.log(store.getState())
    let users = store.getState().login.users
    localStorage.setItem('usersDB', JSON.stringify(users)) 
})

export default store