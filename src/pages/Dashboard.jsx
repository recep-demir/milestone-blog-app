import React from 'react'
import { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import Card from '../components/blog/card'


const Dashboard = () => {
  const {getBlogs}=useBlogCalls()

  useEffect(() => {
    getBlogs();
  }, [])

  return (
    <div>Dashboard

      <Card></Card>
    </div>
  )
}

export default Dashboard