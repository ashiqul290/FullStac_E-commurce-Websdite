import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import useLoginInfo from '../ZustandStore/store';

const PrivateRoute = ({ children }) => {

    let nevigate = useNavigate();
    const {addUserInfo, user} = useLoginInfo()
useEffect(() => {
    axios.get("http://localhost:5100/api/v1/api/auth/me",{withCredentials: true}).then((res) => {
    addUserInfo(res.data);
    }).catch((err) => {
     console.log(err.message);
     nevigate('/login');
    })
},[])


  return (
    <div>{children}</div>
  )
}

export default PrivateRoute