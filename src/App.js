import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.tsx';
import HomeMenu from './components/HomeMenu.tsx'
import Option1 from './components/Option1.tsx';
import Option2 from './components/Option2.tsx';
import Option3 from './components/Option3.tsx';

import './App.scss'

function App() {
  let [isLogin, setIsLogin] = useState(false)
  console.log(isLogin, 'islogin')
  
  return (
    <div className='app'>
      <BrowserRouter>
        {isLogin && <HomeMenu />}
        <Routes>
          <Route path='/' element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}></Route>
          <Route path='/option1' element={<Option1 />}></Route>
          <Route path='/option2' element={<Option2 />}></Route>
          <Route path='/option3' element={<Option3 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
