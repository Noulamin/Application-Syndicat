import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Login from './pages/Auth/Login'
import RequireAuth from './utils/RequireAuth';
import DashAdmin from './pages/Admin/DashAdmin';
import CodePromo from './pages/Admin/CodePromo';
import ProfClient from './pages/ProfClient';
import LayoutAdmin from './components/Admin/LayoutAdmin';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <Routes>

        <Route>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
        </Route>

      // client url = DashClt Component
        <Route element={<RequireAuth Roles={["client"]} />}>
          <Route path='/client' element={<ProfClient />} />
        </Route>

      // admin url = admin Dash Component
        <Route element={<RequireAuth Roles={["admin"]} />}>
          <Route element={<LayoutAdmin />}>
            <Route path='/admin' element={<DashAdmin />} />
            <Route path='/codepromos' element={<CodePromo />} />
          </Route>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;