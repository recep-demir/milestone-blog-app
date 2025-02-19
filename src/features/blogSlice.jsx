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
    clear: () => initialState,
  },
});

export const { clear } = blogSlice.actions;

export default blogSlice.reducer;