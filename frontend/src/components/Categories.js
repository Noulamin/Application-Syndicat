import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logout from './Home/Logout'
import axios from 'axios'
import ProductByCategorie from './ProductByCategorie'



function Categories() {


  return (
    <>
         <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                <span className="text-white">
                    <i className="fa-solid fa-bars"></i>
                </span>
                <Link className='text-white' to="/productByCategorie">All Catégories</Link>
            </div>
    </>
  )
}

export default Categories