import React from 'react'
import { useSelector } from 'react-redux'

const Card = () => {
const {blogs} = useSelector(state => state.blog)


  return (
    <div>card</div>
  )
}

export default Card