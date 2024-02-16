import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuth }) => {
  return (
    <>
      <Link to="/">ホーム</Link>
      {!isAuth ? (
        <Link to="/login">ログイン</Link>
      ) : (
        <>
          <Link to="/createconcept">新概念作成</Link>
          <Link to="/logout">ログアウト</Link>
        </>
      )}
    </>
  );
}

export default Header;
