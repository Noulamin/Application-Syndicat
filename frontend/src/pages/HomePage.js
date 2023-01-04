import React from 'react'
import Banner from '../components/Home/Banner'
import Categories from '../components/Home/Categories'
import Features from '../components/Home/Features'
import NewArrival from '../components/Home/NewArrival'
import Products from '../components/Home/Products'


const HomePage = () => {
  return (
    <>
     <Banner />
     <Features />
     <Categories />
     <NewArrival />
     <Products />
    </>
  )
}

export default HomePage