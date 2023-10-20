import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    isLoading: false,
    isError: false
}

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
      loginStart: (state)=> {
          state.isLoading = true
      },
      loginSuccess: (state, action)=> {
          state.isLoading = false
          state.currentUser = action.payload
          state.isError = false
      },
      loginFailure: (state)=> {
          state.isLoading = false
          state.isError = true
      }
  }
});

export const  user = state => state.user

export const {loginStart, loginSuccess, loginFailure} = UserSlice.actions

export default UserSlice.reducer