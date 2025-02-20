import React from 'react'
import { useDispatch } from 'react-redux'
import { blogSuccess, fetchFail, fetchStart } from '../features/blogSlice'
import { useSelector } from 'react-redux'
import axios from 'axios'

const useBlogCalls = () => {
    const dispatch =useDispatch()
    const BASE_URL=import.meta.env.VITE_BASE_URL
    const {token}=useSelector(state => state.auth)

    const getBlogs = async () => {
        dispatch(fetchStart())
        try {
            const {data}= await axios(`${BASE_URL}blogs`,
                {
                    headers: {
                    Authorization:`Token ${token}`,
                    },
                }
            )
            
            dispatch(blogSuccess(data))
        } catch (error) {
            dispatch(fetchFail())
        }
    }


  return {getBlogs}
}

export default useBlogCalls