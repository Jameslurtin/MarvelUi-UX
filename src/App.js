import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Marvelui from './Marvelui';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Ui"element={<Marvelui/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
