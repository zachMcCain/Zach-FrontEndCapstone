import React from 'react';
import styled from 'styled-components';

const Free = styled.span`
  color: #3278AE;
  padding: 5px;
  font-family: Graphik, Roboto, "Helvetica Neue";
  font-size: 16px;
  font-weight: bold;
  margin-top:
`

const Truck = styled.img`
  height: 18px;
  margin-left: 5px;
`


function FreeShip(props) {
  if (props.price >= 50) {
    return<div><Truck src="https://img.icons8.com/cotton/32/000000/truck--v1.png"/><Free>This item ships for FREE!</Free></div>;
  } else {
    return<div><Truck src="https://img.icons8.com/cotton/32/000000/truck--v1.png"/><Free>Orders of $50 or more ship for free.</Free></div>;
  }
}


// Orders of $50 or more ship for free.

export default FreeShip;
