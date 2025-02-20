import React from 'react'
import { useDispatch } from 'react-redux'
import { blogSuccess, fetchFail, fetchStart } from '../features/blogSlice'
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


  return {getBlogs}
}

export default useBlogCalls