import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Login from './pages/Auth/Login'
import HomePage from './pages/HomePage'
import DashAdmin from './pages/Admin/DashAdmin';
import Apartments from './pages/Admin/Apartments';
import Settings from './pages/Admin/Settings';
import LayoutAdmin from './components/Admin/LayoutAdmin';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route element={<LayoutAdmin />}>
          <Route path='/admin' element={<DashAdmin />} />
          <Route path='/apartments' element={<Apartments />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;