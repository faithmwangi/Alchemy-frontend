import './App.css';
import NavBar from './ComponentS/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" element={<Home />}/>
      </div>
    </Router>
  );
}

export default App;
