import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/login.tsx';
import Home from './components/Home.tsx'

import './App.scss'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/NavigationOne/*' element={<Home />}></Route>
          <Route path='/NavigationTwo/*' element={<Home />}></Route>
          <Route path='/NavigationThree/*' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
