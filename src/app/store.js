import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './../feature/counter/counterSlice'
import LoginReducer from '../feature/login/LoginSlice'
export default configureStore({
    reducer: {
        counter: counterReducer,   // here counter is state.counter
        login: LoginReducer
    }
})