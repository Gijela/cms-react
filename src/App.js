import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './testRouter/login.tsx';
import Home from './testRouter/home.tsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
