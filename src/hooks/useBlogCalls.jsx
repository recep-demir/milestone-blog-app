import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart } from '../features/blogSlice'

const useBlogCalls = () => {
    const dispatch =useDispatch()
    const BASE_URL=import.meta.env.VITE_BASE_URL

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
            }
        } catch (error) {
            dispatch(fetchFail())
            
        }
    }



  return (
    <div>useBlogCalls</div>
  )
}

export default useBlogCalls