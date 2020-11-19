import React from 'react';
import styled from 'styled-components';

const Free = styled.h5`
  color: #478eff;
  padding: 5px;
`


function FreeShip(props) {
  if (props.price >= 50) {
    return<Free>This item ships for FREE!</Free>;
  } else {
    return<Free>Orders of $50 or more ship for free.</Free>;
  }
}


// Orders of $50 or more ship for free.

export default FreeShip;
