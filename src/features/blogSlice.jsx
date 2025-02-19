import { createSlice } from '@reduxjs/toolkit';


const blogSlice = createSlice({
  name: 'blog',
  initialState:{
    loading:false,
    error:false,
    token:null,
    blogs:[],

  },
  reducers: {
    fetchStart: (state) => {
        state.loading = true;
        state.error = false;
      },
  },
});

export const { clear } = blogSlice.actions;

export default blogSlice.reducer;