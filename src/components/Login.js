import React from 'react'
import {signInWithPopup }from 'firebase/auth'
import {auth, provider} from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsAuth}) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //ログイン処理
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true);
      navigate("/");
    })
  }
  return (
    <div>
      <p>ログインしてみる</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login