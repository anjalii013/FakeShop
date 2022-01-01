import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products)
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product
    return (
      <div className='four wide column' key={id}>
        <Link to={`/product/${id}`}>
          <div className='ui card'>
            <div className='ui medium image'>
              <img src={image} alt={title} />
            </div>
            <div className='content'>
              <div className='header'>{title}</div>
              <div className='header'>$ {price}</div>
              <div className='extra content'>{category}</div>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return <>{renderList}</>
}

export default ProductComponent
