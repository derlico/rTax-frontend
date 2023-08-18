import './App.css';
import TopNav from './Components/nav/TopNav';
import Pos from './Components/pos/Pos';
import BaseCatalogue from './Components/catalogue/BaseCatalogue';
import HomeTrial from './Components/home/HomeTrial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    {/* install bootstrap-icons with npm i boostrap-icons */}
    <Router>
      <TopNav />
      <Routes>
        <Route path='/' element={<HomeTrial />}/>
        <Route path='/products' element={<BaseCatalogue />}/>
        <Route path="/pos" element={<Pos />} />
        <Route path="/reports" />
        <Route path="/admin" />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
