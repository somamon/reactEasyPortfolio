import React, { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import {db,auth} from "../firebase"

const CreateConcept = () => {
  const [conceptValue, setConceptValue] = useState('');

  const handleInputChange = (e) => {
    setConceptValue(e.target.value);
  };

  // ランダムな文字列の配列
  const randomStrings = [
    'としけ込む',
    'を愛する',
    'から離れられない',
    'に感謝する',
    'を楽しむ',
    'を完全に理解する',
    'から最も離れた地点に存在してみる。たまにはそういうこともいいだろう',
    'を追求する',
    'を探求する',
    'を信じる',
    'を尊重する',
    'を共有する',
    'を受け入れる',
    'を育てる',
    'を掴む',
  ];

  // ランダム処理
  const randomString = randomStrings[Math.floor(Math.random() * randomStrings.length)];

  // 概念の作成
  const renderResult = conceptValue !== '' ? conceptValue + randomString : null;
  const handleCreateConcept = async() => {
    // DBに保存する
    const conceptDocRef = doc(db, 'concepts', renderResult); // 'concepts'はFirestoreのコレクション名

    try {
      await setDoc(conceptDocRef, {
        conceptValue: renderResult,
        timestamp: new Date(),
        author: {
          username: auth.currentUser.displayName,
          id: auth.currentUser.uid
        }
      });
      console.log('概念がデータベースに追加されました。');
    } catch (error) {
      console.error('概念の追加に失敗しました:', error);
    }
    // 作成後、概念の値をリセットする
    setConceptValue('');
  };

  return (
    <div className='CreateConceptWrap'>
      <h1>新概念を作成する</h1>
      <h4>好きなものを入力してね</h4>
      <input
        type="text"
        placeholder='好きなもの'
        value={conceptValue}
        onChange={handleInputChange}
      />
      <h4>新概念: {renderResult}</h4>
      <button className='postButton' onClick={handleCreateConcept}>新概念を刻印する</button>
    </div>
  );
};

export default CreateConcept;
