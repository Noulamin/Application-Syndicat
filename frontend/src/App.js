import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Register from './pages/Auth/Register';
import HomePage from './pages/HomePage'
import Login from './pages/Auth/Login'
import ForgetPassword from './pages/Auth/ForgetPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import RequireAuth from './utils/RequireAuth';
import DashAdmin from './pages/Admin/DashAdmin';
import Products from './pages/Admin/Products';
import Categories from './pages/Admin/Categories';
import Commands from './pages/Admin/Commands';
import Comments from './pages/Admin/Comments';
import CodePromo from './pages/Admin/CodePromo';
import Settings from './pages/Admin/Settings';
import ProfClient from './pages/ProfClient';
import Layout from './components/Layout';
import LayoutAdmin from './components/Admin/LayoutAdmin';
import NotFound from './pages/NotFound';
import ProductDetails from './components/Home/ProductDetails';
import ProductByCategorie from './components/ProductByCategorie';
import Panier from './components/Home/Panier/Panier';
import Payment from './components/Home/Panier/Payment';









function App() {
  return (
    <>
      <Routes>

        <Route element={<Layout />} >
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgetPassword' element={<ForgetPassword />} />
          <Route path='/resetPassword/:token' element={<ResetPassword />} />
          <Route path='/client' element={<ProfClient />} />
          <Route path='/productDetails/:id' element={<ProductDetails />} />
          <Route path='/productByCategorie' element={<ProductByCategorie />} />
          <Route path='/panaier' element={<Panier />} />
          <Route path='/payment' element={<Payment />} />
        </Route>



      // client url = DashClt Component
        <Route element={<RequireAuth Roles={["client"]} />}>
          <Route path='/client' element={<ProfClient />} />
        </Route>


      // admin url = admin Dash Component
        <Route element={<RequireAuth Roles={["admin"]} />}>
          <Route element={<LayoutAdmin />}>
            <Route path='/admin' element={<DashAdmin />} />
            <Route path='/products' element={<Products />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/codepromos' element={<CodePromo />} />
            <Route path='/commands' element={<Commands />} />
            <Route path='/comments' element={<Comments />} />
            <Route path='/settings' element={<Settings />} />
          </Route>
        </Route>


        <Route path='*' element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
