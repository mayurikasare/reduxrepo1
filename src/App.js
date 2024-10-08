
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
      </Routes>
      </BrowserRouter>
      <h5>redux</h5>
    </div>
  );
}

export default App;
