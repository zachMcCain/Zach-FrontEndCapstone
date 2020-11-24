import React from 'react';
import styled from 'styled-components'


const CartButton = styled.button`
  width: 396px;
  height: 40px;
  margin: 5px;
  text-align: center;
  background: #426C90;
  border-color: #426C90;
  border-radius: 1px;
  border-width: 1px;
  color: #FFFFFF;
  font-family: Graphik, Roboto, "Helvetica Neue";
  font-size: 16px;
  border: none;
  :hover {
    background-color: #2b455c;
  }
  `
//`


const WishButton = styled.button`
  width: 191px;
  height: 40px;
  margin: 5px;
  margin-right: 10px;
  background: #FFFFFF;
  border-style: solid;
  border-color: #c5c5c5;
  border-radius: 1px;
  color: #292929;
  // font-family: Graphik, Roboto, "Helvetica Neue";
  font-size: 16px;
  border-width: 1px;
  border-style: solid;
  :hover {
    background-color: #f0f0f0;
  }
`

const RegistryButton = styled.button`
  width: 190px;
  height: 40px;
  margin-left: 4px;
  margin-right: 0;
  background: #FFFFFF;
  border-style: solid;
  border-color: #c5c5c5;
  border-radius: 1px;
  color: #292929;
  // font-family: Graphik, Roboto, "Helvetica Neue";
  font-size: 16px;
  border-width: 1px;
  border-style: solid;
  :hover {
    background-color: #f0f0f0;
  }
`



function Cart(props) {
  return (
    <div>
      <CartButton>Add to cart - ${props.price}.95</CartButton><br></br>
      <WishButton>Add to wish list</WishButton>
      <RegistryButton>Add to registry</RegistryButton>
    </div>
  )
}

export default Cart;
