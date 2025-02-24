import { createSlice } from '@reduxjs/toolkit';


const blogSlice = createSlice({
  name: 'blog',
  initialState:{
    loading:false,
    error:false,
    token:null,
    blogs:[],
    comments:[],
    categories:[],

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
        console.log("slice eklenen blog",payload.data)  

      },
      commentSuccess: (state,{payload}) =>{
        state.loading =false;
        state.error =false;
        state.comments =payload.data; 
        console.log("slice eklenen comments",payload.data)       
      },
      addCommentToState: (state, { payload }) => {
        console.log("Redux'a eklenen yorum:", payload);
        state.comments.push(payload);
      },
      categorySuccess: (state,{payload}) =>{
        state.loading =false;
        state.error =false;
        state.categories =payload.data;
        console.log("kategori" , payload.data)
      },
      createBlogSuccess: (state, { payload }) => {
        state.blogs.push(payload);
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

export const { fetchStart,fetchFail,blogSuccess,toggleLikeInState,commentSuccess,addCommentToState, categorySuccess,createBlogSuccess } = blogSlice.actions;

export default blogSlice.reducer;