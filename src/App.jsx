import './App.css';
import TopNav from './nav/TopNav';
import Pos from './pos/Pos';
import Home from './home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    {/* install bootstrap-icons with npm i boostrap-icons */}
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" />
        <Route path="/pos" />
        <Route path="/reports" />
        <Route path="/admin" />
      </Routes>
      </Router>
    <Pos />
      
    </>
  );
}

export default App;
