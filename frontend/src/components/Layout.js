import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import CopyRight from './CopyRight'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'





const Layout = () => {
    const [cart, setCart] = useState([]);
    const [show, setShow] = useState(true);

    return (
        <>
            <Header size = {cart.length}/>
            <NavBar />
            <Outlet />
            <Footer />
            <CopyRight />
        </>
    )
}

export default Layout