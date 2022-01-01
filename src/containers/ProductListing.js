import React, { useEffect } from 'react'
import axios from 'axios'
import ProductComponent from './ProductComponent'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productAction'

function ProductListing() {
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Error reported', err)
      })
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  console.log('My Products:', products)

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing
