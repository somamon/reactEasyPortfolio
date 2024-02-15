import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
    <Link to="/">ホーム</Link>
    <Link to="/createconcept">新概念作成</Link>
    <Link to="/login">ログイン</Link>
    </>
  )
}

export default Header