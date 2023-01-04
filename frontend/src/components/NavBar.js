import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logout from './Home/Logout'
import axios from 'axios'
import Categories from './Categories'



const NavBar = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        getAllCategories()
    }, []);

    const url = 'http://localhost:8080/categorie/getAllCategorie'

    const getAllCategories = () => {
        try {
            axios.get(url)
                .then(response => {
                    setCategory(response.data)
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>

            <nav className="bg-gray-800">
                <div className="container flex">

                    <div className="flex items-center justify-between flex-grow pl-12">
                        <Categories />
                        <div className="flex items-center justify-between flex-grow pl-12">
                            <div className="flex items-center space-x-6 capitalize">
                                <Link to="home" className="text-gray-200 hover:text-white transition">Home</Link>
                                <Link to="pages/shop.html" className="text-gray-200 hover:text-white transition">Shop</Link>
                                <Link to="#" className="text-gray-200 hover:text-white transition">About us</Link>
                                <Link to="#" className="text-gray-200 hover:text-white transition">Contact us</Link>
                            </div>
                            <Logout />
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar