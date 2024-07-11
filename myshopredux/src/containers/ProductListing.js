import React from 'react'
import axios from 'axios'
import ProductComonent from './ProductComonent'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'



const ProductListing = () => {
    // const product = useSelector((state) =>state)

    const fetchProducts = async()=>{
        const response =await axios
        .get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log("err",err)
        })
        console.log(response.data)
    };
        




        useEffect(()=>{
            fetchProducts()
        },[])



  return (
    <div className='ui grid container'><ProductComonent/></div>
  )
}

export default ProductListing