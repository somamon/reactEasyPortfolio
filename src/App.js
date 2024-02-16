import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './components/Home';
import Logout from './components/Logout';
import Login from './components/Login';
import CreateConcept from './components/CreateConcept';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <Router>
      <Header isAuth={isAuth}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createconcept" element={<CreateConcept  isAuth={isAuth}/>}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
