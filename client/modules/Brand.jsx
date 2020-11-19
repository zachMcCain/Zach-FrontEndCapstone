import React from 'react';
import styled from 'styled-components'


const Title = styled.h3`
  text-decoration: none;
  color: #478eff;
  padding: 5px;
  margin: 0px;
`

function Brand(props) {
  return<Title href='http://www.rei.com'>{props.brand}</Title>;
}

export default Brand;
