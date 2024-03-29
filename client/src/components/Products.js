import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Products/action'
import style from '../Styles/products.module.css'
import Premium from './Premium'
import SideNav from './SideNav'
import TopPicks from './TopPicks'
import Vegterians from './Vegterians'
import WhatsNew from './WhatsNew'
const Products = () => {


    const dispatch = useDispatch()

    const {products} = useSelector(state => state.productState)

    const getProducts = async() => {
        let res = await fetch('https://swiggy-server.onrender.com/products')
        let data = await res.json()
        dispatch(getAllProducts(data))
    }

    useEffect(() => {
        getProducts()
    },[])

    return (
        <>

        <div className={style.products_container}>
            <div>
                <SideNav />
            </div>
            <div>
                <TopPicks />
                <WhatsNew />
                <Premium />
                <Vegterians />
            </div>
        </div>
            
        </>
    )
}

export default Products
