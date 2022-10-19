import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element = {<HomePage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
