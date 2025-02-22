import React from 'react'
import { useDispatch } from 'react-redux'
import { blogSuccess, fetchFail, fetchStart,toggleLikeInState } from '../features/blogSlice'
import { useSelector } from 'react-redux'
import axios from 'axios'
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
            console.log(data);
            
            dispatch(blogSuccess(data))
        } catch (error) {
            dispatch(fetchFail())
        }
    }

    const getComments = async (blogId) => {
        try {
          const { data } = await axiosWithToken.get(`/comments/${blogId}`);
          dispatch(commentsSuccess({ blogId, comments: data }));
        } catch (error) {
          console.error(error);
        }
      };
    
      const addComment = async (blogId, commentText) => {
        try {
          const { data } = await axiosWithToken.post("/comments/", {
            blogId,
            comment: commentText,
          });
          dispatch(addCommentSuccess({ blogId, comment: data }));
        } catch (error) {
          console.error(error);
        }
      };

    const toggleLike = async (id, userId) => {
        try {
          await axiosWithToken.post(`blogs/${id}/postLike`);
          dispatch(toggleLikeInState({ blogId: id, userId }));
        } catch (error) {
          console.error(error);
        }
      };

  return {getBlogs,toggleLike,getComments,addComment}
}

export default useBlogCalls