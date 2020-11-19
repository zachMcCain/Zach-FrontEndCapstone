import React from 'react';
import styled from 'styled-components'


const CartButton = styled.button`
  width: 380px;
  height: 30px;
  margin: 5px;
  background: blue;
  color: white;
`

const SaveButtons = styled.button`
  width: 185px;
  height: 30px;
  margin: 5px;
  background: white;
`



function Cart(props) {
  return (
    <div>
      <CartButton>Add to cart - ${props.price}.95</CartButton>
      <SaveButtons>Add to wish list</SaveButtons>
      <SaveButtons>Add to registry</SaveButtons>
    </div>
  )
}

export default Cart;
