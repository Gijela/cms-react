import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/login.tsx';
import Home from './components/home.tsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
