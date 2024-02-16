import React from 'react'
import {signInWithPopup }from 'firebase/auth'
import {auth, provider} from '../firebase'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket} from '@fortawesome/free-solid-svg-icons'

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
    <div className='login-form'>
      <p>ログインしてみる</p>
      <div className='read-content-homeicon'><FontAwesomeIcon icon={faRightToBracket}  style={{ width: '300px', height: '300px' }} /></div>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login