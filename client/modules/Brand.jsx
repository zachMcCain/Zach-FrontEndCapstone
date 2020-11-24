import React from 'react';
import styled from 'styled-components';


const Title = styled.h3`
  text-decoration: none;
  color: #347cb1;
  padding: 5px;
  margin: 0px;
  font-family: Graphik, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
`

function Brand(props) {
  return<Title href='http://www.rei.com'>{props.brand}</Title>;
}

export default Brand;
