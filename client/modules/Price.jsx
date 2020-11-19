import React from 'react';
import styled from 'styled-components';

const Money = styled.h3`
  margin-top: 5px;
  padding: 5px;
`

function Price(props) {
  return<Money>${props.price}.95</Money>;
}

export default Price;
