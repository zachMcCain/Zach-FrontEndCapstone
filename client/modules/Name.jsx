import React from 'react';
import styled from 'styled-components';


const Head = styled.h1`
  margin-top: 0px;
  padding: 5px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-family: Stuart, Georgia, serif;
  font-size: 28px;
  font-weight: normal;
`


function Name(props) {
  return<Head>{props.name}</Head>;
}

export default Name;
