import React from 'react'
import {signOut }from 'firebase/auth'
import {auth, provider} from '../firebase'
import { useNavigate } from 'react-router-dom'

const Logout = ({setIsAuth}) => {
  const navigate = useNavigate();
  const logout = () => {
    //ログアウト処理
      signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate("/login");
      });
    };
  
  return (
    <div>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout