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

  const register = async (userInfo) =>{
    dispatch(fetchStart())

    try {
      const { data } = await axios.post(
        "https://37130.fullstack.clarusway.com/users/",
        userInfo);
        dispatch(registerSuccess(data))
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
        "https://37130.fullstack.clarusway.com/auth/login",
        userInfo
      );
      dispatch(loginSuccess(data))
      toastSuccessNotify("User login successfully")
      navigate("/")
    } catch (error) {
        dispatch(fetchFail())
        
    }
  };

  const logout = async () => {
    dispatch(fetchStart());

    try {
      const { data } = await axios(
        "https://37130.fullstack.clarusway.com/auth/logout",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      
      dispatch(logoutSuccess())
      toastSuccessNotify("User logout successfully")
      navigate("/");
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    }
  };





  return {register, login, logout}
}

export default useAuthCalls