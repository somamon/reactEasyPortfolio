import React from 'react'
import {signOut }from 'firebase/auth'
import {auth, provider} from '../firebase'
import { useNavigate } from 'react-router-dom'
import "./Logout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons'

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
    <div className='logout-form'>
      <p>ログアウトする</p>
      <div className='read-content-homeicon'><FontAwesomeIcon icon={faRightFromBracket}  style={{ width: '300px', height: '300px' }} /></div>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout