import React from 'react'
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from '../features/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toastSuccessNotify } from '../helper/ToastNotify';

const useAuthCalls = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const register = async (userInfo) =>{
    dispatch(fetchStart())

    try {
      const { data } = await axios.post(
        "https://37130.fullstack.clarusway.com/users/",
        userInfo);
        dispatch(registerSuccess(data))
        toastSuccessNotify("User registered successfully")
        navigate("/dashboard")
      
    } catch (error) {
      dispatch(fetchFail())
      
    }
  }
  return {register}
}

export default useAuthCalls