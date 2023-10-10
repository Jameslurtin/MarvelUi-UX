import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Marvelui from './Marvelui';
import MarvelDetail from './MarvelDetail';
import Carousel1 from './Carousel1';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Ui"element={<Marvelui/>}></Route>
          <Route path="/Ui/character"element={<MarvelDetail/>}></Route>
          <Route path="/c"element={<Carousel1/>}></Route>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
