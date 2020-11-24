import React from 'react';
import styled from 'styled-components';

const Money = styled.p`
  margin-top: 48px;
  margin-left: 5px;
  padding: 0px;
  font-family: Stuart, Georgia, serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
`

function Price(props) {
  return<Money>${props.price}.95</Money>;
}

export default Price;
