import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element = {<HomePage />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
