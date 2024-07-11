import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions';



import ProductComonent from './ProductComonent';
const ProductListing = () => {
    const products =useSelector((state)=>state);
const dispatch= useDispatch();
    const fetchProducts = async()=>{
        const response = await  
                axios.get('https://fakestoreapi.com/products')
                .catch((err)=>{
                console.log('ERR',err)
        });
        console.log(response.data)
        dispatch(setProducts(response.data))
    };

    useEffect(()=>{
        fetchProducts()
    },[])
    console.log("_Products: ",products)
  return (
    <div style={{marginTop:'100px'}}><ProductComonent/></div>
  )
}

export default ProductListing