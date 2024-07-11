import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProducts } from '../redux/actions/productActions'
import { useEffect } from 'react'


const ProductDetails = () => {

  const products = useSelector((state) => state.product);
  const { productId } = useParams()
  const dispatch = useDispatch();

  console.log(productId)

  const fetchDetails = async () => {
    const response = await
      axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
          console.log('ERR', err)
        });
    console.log(response.data)
    dispatch(selectedProducts(response.data))
  };
  useEffect(()=>{
    if (productId && productId !=="")
      fetchDetails()
},[productId])
console.log("_Products: ",products)

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails