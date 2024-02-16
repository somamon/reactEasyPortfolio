import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faArrowsToCircle} from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket} from '@fortawesome/free-solid-svg-icons'

const Header = ({ isAuth }) => {
  return (
    <>
      <header className='create-concept-header'>
        <Link to="/"><FontAwesomeIcon icon={faHouse} />ホーム</Link>
        {!isAuth ? (
          <Link to="/login"><FontAwesomeIcon icon={faRightToBracket} />ログイン</Link>
        ) : (
          <>
            <Link to="/createconcept"><FontAwesomeIcon icon={faArrowsToCircle} />新概念作成</Link>
            <Link to="/logout"><FontAwesomeIcon icon={faRightFromBracket} />ログアウト</Link>
          </>
        )}
      </header>
    </>
  );
}

export default Header;
