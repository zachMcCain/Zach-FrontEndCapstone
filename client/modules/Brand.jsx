import React from 'react';
import styled from 'styled-components'


const Title = styled.a`
  text-decoration: none;
  color: light-blue;
`

function Brand(props) {
  return<h3><Title href='http://www.rei.com'>{props.brand}</Title></h3>;
}

export default Brand;
