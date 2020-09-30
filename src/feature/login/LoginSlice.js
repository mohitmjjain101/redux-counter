import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        username: "",   
        password: ""
    },
    reducers: {

        setUserName: (state, action) => {
            state.username = action.payload;
            console.log(state.username , state.password)
        },
        setPassWord: (state, action) => {
            state.password = action.payload;
        }

    }
})


export const { setUserName, setPassWord } = loginSlice.actions;

export const selectUsername = state => state.login.username;
export const selectPassword = state => state.login.password;

export default loginSlice.reducer