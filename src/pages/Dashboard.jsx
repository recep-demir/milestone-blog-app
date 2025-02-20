import React from 'react'
import { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'


const Dashboard = () => {
  const {getBlogs}=useBlogCalls()

  useEffect(() => {
    getBlogs();
  }, [])



  return (
    <div>Dashboard</div>
  )
}

export default Dashboard