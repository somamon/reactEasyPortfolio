import React, { useEffect, useState } from 'react';
import { doc, getDocs, collection, onSnapshot, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase'; 

const Home = () => {
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    const getConcepts = async () => {
      const conceptsCollection = collection(db, 'concepts'); // 'concepts'はFirestoreのコレクション名

      try {
        const querySnapshot = await getDocs(conceptsCollection);
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
    <div>
      <h2>ホーム</h2>
      <ul>
        {concepts.map((concept) => (
          <li key={concept.id}>{concept.conceptValue}{concept.author.username}<button onClick={() => handleDelete(concept.id)}>概念を忘れ去る</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
