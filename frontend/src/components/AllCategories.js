import React, {useState, useEffect} from 'react'
import axios  from 'axios';
import { Link } from 'react-router-dom';
import '../style/categorieStyle.css'

function AllCategories() {

    const [category, setCategory] = useState([]);
    const [products , setProducts ] = useState([])

    useEffect(() => {
        getAllCategories()
    }, []);

    const url = 'http://localhost:8080/categorie/getAllCategorie'

    const getAllCategories = () => {
        try {
            axios.get(url)
            .then(response => {
                setCategory(response.data)
            })
            .catch(e => {
              console.log(e)
            });
        } catch (err) {
            console.log(err);
        }
    }
    // fetch all products: 
    // fetch API get Products depends on Catégories:
    function getProducts(id){
        const API_URL = `http://localhost:8080/Product/product/${id}`
        return axios.get(API_URL).then(res => {
            console.log(res.data)
            setProducts(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }

  return (
    <>
{/* Showing all catégories  */}
<aside className="container" aria-label="Sidebar">
  <div className="py-4 px-3 bg-gray-50 rounded dark:bg-gray-300">
    {category.map(categorie => 
    <button   onClick={() => {getProducts(categorie.id_categorie)}} className="ml-6 text-gray-600 text-sm bg-sky-500 categorie ">{categorie.categorie}</button>
    )}
  </div>
<hr  />
</aside>
{/* showing products by categorie  */}
    
<div className="container pb-16 HeightProduct">
                <div className="grid grid-cols-4 gap-6">
                {products.map(prod => 
                    <div className="bg-white shadow rounded overflow-hidden group">
                        <div className="relative">
                            <img src="assets/images/products/product1.jpg" alt="product 1" className="w-full" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <Link to="#"
                                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                    title="view product">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </Link>
                                <Link to="#"
                                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                    title="add to wishlist">
                                    <i className="fa-solid fa-heart"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="#">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{prod.title_produit} </h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">${prod.prix_produit} </p>
                                <p className="text-sm text-gray-400 line-through">{prod.promotion_produit == true ? prod.pourcentage_produit : null}</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">Stock ({prod.stock_produit}) </div>
                            </div>
                        </div>
                        <Link to="#"
                            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                            to cart</Link>
                    </div>
                    )}

                    
                </div>
            </div>
</>
  )
}

export default AllCategories