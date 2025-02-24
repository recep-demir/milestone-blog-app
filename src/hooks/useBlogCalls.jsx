import React from 'react'
import { useDispatch } from 'react-redux'
import { addCommentToState, blogSuccess, categorySuccess, commentSuccess, createBlogSuccess, fetchFail, fetchStart,toggleLikeInState } from '../features/blogSlice'
import { useSelector } from 'react-redux'
import useAxios from './useAxios'

const useBlogCalls = () => {
    const dispatch =useDispatch()
    const BASE_URL=import.meta.env.VITE_BASE_URL
    const {token}=useSelector(state => state.auth)
    const {axiosWithToken}=useAxios()

    const getBlogs = async () => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.get("blogs")
            console.log("Gelen Bloglar",data);
            
            dispatch(blogSuccess(data))
        } catch (error) {
            dispatch(fetchFail())
        }
    }
    const getComments = async () =>{
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.get("comments")
            console.log("cekilen Comments",data);
            dispatch(commentSuccess(data));            
        } catch (error) {
            dispatch(fetchFail())
        }
    }
    const addComment =async (blogId, comment) =>{
        dispatch(fetchStart());
        try {
          const { data } = await axiosWithToken.post("comments", { blogId, comment });
          console.log("giden yorumlar",data)
          dispatch(addCommentToState(data));
        } catch (error) {
            console.error("Aloo hata var adding comment ", error);
          dispatch(fetchFail());
        }
      };
    const getCategories =async () =>{
        dispatch(fetchStart())
        try {
          const { data } = await axiosWithToken.get("categories");
          console.log("Gelen Kategoriler",data);
          dispatch(categorySuccess(data));
        } catch (error) {
          console.error("Kategori getirme hatası", error);
          dispatch(fetchFail());
        }
    }

    const addBlog = async(blogData) =>{
        dispatch(fetchStart())

        try {
            console.log("Gönderilen Blog Verisi:", blogData)
            const {data} =await axiosWithToken.post("blogs",blogData)
            dispatch(createBlogSuccess(data))
            
        } catch (error) {
            console.log("Create Blog Error",error)
            dispatch(fetchFail())            
        }
    }
    const deleteBlog = async (blogId) => {
        dispatch(fetchStart());
        try {
          await axiosWithToken.delete(`blogs/${blogId}`);
          dispatch(getBlogs); // Blogları güncelle
        } catch (error) {
          console.error("Delete blog error:", error);
          dispatch(fetchFail());
        }
      };


    const toggleLike = async (id, userId) => {
        try {
          await axiosWithToken.post(`blogs/${id}/postLike`);
          dispatch(toggleLikeInState({ blogId: id, userId }));
        } catch (error) {
          console.error("Like error:", error);
        }
      };


  return {getBlogs,toggleLike,getComments,addComment,getCategories,addBlog,deleteBlog}
}

export default useBlogCalls