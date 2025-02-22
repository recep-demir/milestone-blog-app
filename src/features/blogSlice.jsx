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
      fetchFail: (state) => {
        state.loading = false;
        state.error = true;
      },
      blogSuccess: (state,{payload}) =>{
        state.loading =false;
        state.error =false;
        state.blogs =payload.data;        
      },
      toggleLikeInState: (state, { payload }) => {
        const blog = state.blogs.find((b) => b._id === payload.blogId);
        if (blog) {
          const userIndex = blog.likes.indexOf(payload.userId);
          if (userIndex === -1) {
            blog.likes.push(payload.userId);
          } else {
            blog.likes.splice(userIndex, 1);
          }
        }
      },

  },
});

export const { fetchStart,fetchFail,blogSuccess,toggleLikeInState  } = blogSlice.actions;

export default blogSlice.reducer;