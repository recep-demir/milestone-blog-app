import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState:{
    currentUser: null,
    loading: false,
    error: false,
    token: null,
    userId: null,
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
    registerSuccess: (state,{payload}) =>{
      state.loading= false;
      state.currentUser = payload.user.username;
      state.userId = payload.user._id;
      state.token = payload.token;
    },
    loginSuccess:(state,{payload})=>{
      state.token=payload?.token;
      state.currentUser=payload?.user?.username
      console.log("currentuser in autslice",state.currentUser)
      state.userId=payload?.user?._id
      console.log("userId in autslice",state.userId)
      state.loading = false;
    },
    logoutSuccess: (state) => {
      state.loading= false;
      state.token = null;
      state.currentUser = null;
      state.userId = null;
    },
  },
});

export const {
    fetchStart,
    fetchFail,
    registerSuccess,
    loginSuccess,
    logoutSuccess,
  } = authSlice.actions;
  export default authSlice.reducer;