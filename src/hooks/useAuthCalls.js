import React from 'react'
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, logoutSuccess, registerSuccess,loginSuccess } from '../features/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toastSuccessNotify } from '../helper/ToastNotify';
import { useSelector } from 'react-redux';

const useAuthCalls = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {token} =useSelector(state => state.auth)
  const BASE_URL=import.meta.env.VITE_BASE_URL

  const register = async (userInfo) =>{
    dispatch(fetchStart())

    try {
      const { data } = await axios.post(
        `${BASE_URL}/users`,
        userInfo);
        dispatch(registerSuccess(data))
        localStorage.setItem("token", data.token)
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
      dispatch(loginSuccess(data))
      localStorage.setItem("token", data.token)
      toastSuccessNotify("Login successful")
      navigate("/")
    } catch (error) {
        dispatch(fetchFail())
        
    }
  };

  const logout = async () => {
    dispatch(fetchStart());

    try {
      const { data } = await axios(
        `${BASE_URL}auth/logout`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      localStorage.removeItem("token");      
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