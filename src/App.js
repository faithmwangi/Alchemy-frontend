import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from'./components/NavBar';
 //import Cart from './Cart';
// import { Routes } from 'react-router-dom';\


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </div>
    <NavBar />
    </Router>
  )
}

export default App;

