import React from 'react'
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, logoutSuccess, registerSuccess,loginSuccess } from '../features/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toastSuccessNotify } from '../helper/ToastNotify';
import { useSelector } from 'react-redux';
import useAxios from './useAxios';

const useAuthCalls = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {token} =useSelector(state => state.auth)
  const {axiosWithToken}=useAxios()
  const BASE_URL=import.meta.env.VITE_BASE_URL

  const register = async (userInfo) =>{
    dispatch(fetchStart())

    try {
      const { data } = await axios.post(
        `${BASE_URL}users`,
        userInfo);
        console.log("API Yanıtı:", data);
        dispatch(registerSuccess(data))        
        localStorage.setItem("token", data.token)
        localStorage.setItem("userId", data.data._id)
        localStorage.setItem("userName", data.data.username)
        toastSuccessNotify("User registered successfully")
        navigate("/")
      
    } catch (error) {
      dispatch(fetchFail())
    }
  };
  const login = async (userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}auth/login`,
        userInfo
      );
      console.log("Login API Yanıtı:", data);
      dispatch(loginSuccess(data))
      localStorage.setItem("token", data.token)
      // localStorage.setItem("userId", data.data._id)
      // localStorage.setItem("userName", data.data.username)
      toastSuccessNotify("Login successful")
      navigate("/")
    } catch (error) {
        dispatch(fetchFail())
        
    }
  };

  const logout = async () => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.get("auth/logout/")
      
      localStorage.removeItem("token");      
      // localStorage.removeItem("userId");      
      // localStorage.removeItem("userName");      
      dispatch(logoutSuccess())
      toastSuccessNotify("User logged out successfully")
      navigate("/login");
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    }
  };





  return {register, login, logout}
}

export default useAuthCalls