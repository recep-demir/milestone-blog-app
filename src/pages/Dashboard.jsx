import React from 'react'
import { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import { Container, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import BlogCard from '../components/blog/BlogCard'


const Dashboard = () => {
  const {getBlogs}=useBlogCalls()
  const {blogs} =useSelector(state => state.blog)

  useEffect(() => {
    getBlogs();
  }, [])

  return (
    <Container>
      {blogs?.map((blog)=>(
        <BlogCard key={blog.id} blog={blog}/>
      ))}
      
      
    </Container>
  )
}

export default Dashboard