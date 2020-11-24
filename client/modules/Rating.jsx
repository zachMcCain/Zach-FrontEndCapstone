import React from 'react';
import styled from 'styled-components'


const Stars = styled.p`
  color: #478eff;
  padding: 0px;
  float: left;
  margin-bottom: 0px;
  font-size: 24px;
  margin-top: 10px;
  margin-left: 5px;
`

const Item = styled.p`
  font-family: "Roboto Condensed", Roboto;
  float: right;
  margin-top: 20px;
`

const TextBox = styled.div`
  clear: both;
  width: 400px;;
`


function Rating(props) {
  return(
    <TextBox>
      <Stars>{String.fromCharCode(9734)} &#9734; &#9734; &#9734; &#9734; </Stars>
      <Item> Item #{props.id}</Item>
    </TextBox>
  )
}

export default Rating;
