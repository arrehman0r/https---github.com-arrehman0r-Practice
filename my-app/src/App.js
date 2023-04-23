import React, { useState } from 'react';
import './App.css';


function App() {
  const [products, setProducts] = useState([
    {
      title: "Zinger-Burger",
      price: 350,
      quantity: 0,
      image: "burger.jpg",
      key: 1
    },
    {
      title: "Zinger-Burger",
      price: 350,
      quantity: 0,
      image: "burger.jpg",
      key: 2
    },
    {
      title: "Zinger-Burger",
      price: 350,
      quantity: 0,
      image: "burger.jpg",
      key: 3
    },
    {
      title: "Zinger-Burger",
      price: 350,
      quantity: 0,
      image: "burger.jpg",
      key: 4
    }
  ]);

  const dec = (index, value, quantity) => {
    let copyProducts = [...products];
    copyProducts[index].quantity += value;
    setProducts(copyProducts);
  }

  return (
    <>
  

<div className="container" style={{ display: 'flex' }}>
      <h1>Menu</h1>

      {products.map((product, index) => (
        <div className='card' style={{ width: '18rem' }} key={product.key}>
          <img className='card-img-top' src={product.image} alt="" />
          <div className='card-body'>
            <h4 className='card-title'>{product.title}</h4>
            <p>{product.price}</p>
            <button className='btn btn-sucess' onClick={() => dec(index, 1, product.quantity)}>+</button>
            {product.quantity}
            <button className='btn btn-sucess' onClick={() => dec(index, -1, product.quantity)} disabled={product.quantity === 0}>-</button>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
        
      ))}
      </div>
    </>
  );
}

export default App;
