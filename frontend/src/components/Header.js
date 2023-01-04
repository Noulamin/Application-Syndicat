import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = ({size}) => {
    // const [show, setShow] = useState(true);
    const icon = <FontAwesomeIcon icon="fa-regular fa-bag-shopping" />

    return (
        <>
            <header className="py-4 shadow-sm bg-white">
                <div className="container flex items-center justify-between">
                    <Link to="/">
                        <img src="../assets/images/logo.svg" alt="Logo" className="w-32"/>
                    </Link>

                    <Search />

                    <div className="flex items-center space-x-4">
                        <Link to="#" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                            <div className="text-xs leading-3">Wishlist</div>
                            <div
                                className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                8</div>
                        </Link>
                        <Link to="/panaier" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                {/* {show ? 'boubker' : 'cart'} */}
                            </div>
                            <div className="text-xs leading-3">Cart</div>
                            <div
                                className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">{size}</div>
                        </Link>
                        <Link to="/client" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="text-xs leading-3">Account</div>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header