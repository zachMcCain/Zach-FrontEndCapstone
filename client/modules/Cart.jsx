import React from 'react';




function Cart(props) {
  return (
    <div>
      <button>Add to cart - ${props.price}.95</button>
      <button>Add to wish list</button>
      <button>Add to registry</button>
    </div>
  )
}

export default Cart;
