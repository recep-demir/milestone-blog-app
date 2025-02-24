import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState:{
    currentUser: null,
    loading: false,
    error: false,
    token: null,
    userId: null,
    email: null,
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
      state.currentUser = payload.data.username;
      state.userId = payload.data._id;
      state.email = payload.data.email;
      state.token = payload.token;
    },
    loginSuccess:(state,{payload})=>{
      state.token=payload?.token;
      state.currentUser=payload?.user?.username
      console.log("autslicadaki curentuser",state.currentUser)
      state.userId=payload?.user?._id
      console.log("userId autslic",state.userId)
      state.email = payload?.user?.email;
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