import React, { useEffect, useState } from 'react';
import { doc, getDocs, collection, onSnapshot, deleteDoc, query,  orderBy } from 'firebase/firestore';
import { db, auth} from '../firebase'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Home.css"
import { faHouse} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    const getConcepts = async () => {
      const conceptsCollection = collection(db, 'concepts'); // 'concepts'はFirestoreのコレクション名
      const conceptsCollectionSort = query(conceptsCollection, orderBy("timestamp", "desc")); //コレクションをソートする
      try {
        const querySnapshot = await getDocs(conceptsCollectionSort);
        const fetchedConcepts = [];
        querySnapshot.forEach((doc) => {
          fetchedConcepts.push({ id: doc.id, ...doc.data() });
        });
        setConcepts(fetchedConcepts);
      } catch (error) {
        console.error('概念の取得に失敗しました:', error);
      }
    };

    // 初回読み込みと、データが更新されたときに再度読み込む
    const unsubscribe = onSnapshot(collection(db, 'concepts'), () => {
      getConcepts();
    });

    return () => unsubscribe();
  }, []);
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "concepts", id));
  };


  return (
    <div className='read-content'>
      <h2>サイト説明</h2>
      <p>CreateConceptは、新しい視点を発見するのを手伝うサイトです。</p>
      <p>あなたが好きなものを入力すると、文言がランダムで追加されます。</p>
      <p>ぜひCreateConceptで新しい視点を探してみましょう</p>
      <div className='read-content-homeicon'><FontAwesomeIcon icon={faHouse}  style={{ width: '300px', height: '300px' }} /></div>
      <p>新概念</p>
      <ul>
        {concepts.map((concept) => (
          <li key={concept.id} className="concept-container">{concept.conceptValue}<br/>作者名:{concept.author.username}{concept.author.id === auth.currentUser?.uid && (<button onClick={() => handleDelete(concept.id)}>概念を忘れ去る</button>)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
