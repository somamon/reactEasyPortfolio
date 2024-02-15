import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './components/Home';
import Logout from './components/Logout';
import Login from './components/Login';
import CreateConcept from './components/CreateConcept';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createconcept" element={<CreateConcept />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
