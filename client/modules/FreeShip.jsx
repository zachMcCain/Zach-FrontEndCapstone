import React from 'react';

function FreeShip(props) {
  if (props.price >= 50) {
    return<h5>This item ships for FREE!</h5>;
  } else {
    return<h5>Orders of $50 or more ship for free.</h5>;
  }
}


// Orders of $50 or more ship for free.

export default FreeShip;
