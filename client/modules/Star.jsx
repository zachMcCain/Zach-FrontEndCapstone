import React from 'react';
import styled from 'styled-components';


const Stars = styled.p`
  color: #478eff;
  padding: 0px;
  float: left;
  margin-bottom: 0px;
  font-size: 24px;
  margin-top: 10px;
  margin-left: 5px;
`

function Star(props) {
  if (!props.full) {
    return (
      <Stars>&#9734; </Stars>
    )
  } else {
    return (
      <Stars>&#9733; </Stars>
    )
  }
}


export default Star;