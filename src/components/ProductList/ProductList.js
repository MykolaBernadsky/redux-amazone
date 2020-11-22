import React from 'react';
import formatCurrency from '../../utils';
import { ListOfProducts, ProductItem, ProductPrice } from './ProductList.styles';

function ProductList({ products }) {
  return (
    <div>
      <ListOfProducts>
        {products.map(product => (
          <li key={product._id}>
            <ProductItem>
              <a href={"#" + product._id}>
                <img src={product.image} alt="img" />
                <p>{product.title}</p>
              </a>
            </ProductItem>
            <ProductPrice>
              <div>{formatCurrency(product.price)}</div>
              <button> Add to cart </button>
            </ProductPrice>
          </li>
        ))}
      </ListOfProducts>      
    </div>
  )
}

export default ProductList
