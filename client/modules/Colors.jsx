import React from 'react';
import ColorEntry from './ColorEntry.jsx';
import styled from 'styled-components'


const ColorBox = styled.div`
  padding: 5px;
`


const ColorText = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
  font-family: "Roboto Condensed", Roboto;
`
const Price = styled.div`
  font-weight: bold;
  padding-bottom: 4px;
  font-size: 14px;
  font-family: Graphik, Roboto, "Helvetica Neue";
`

function Colors(props) {

  if (props.colors) {

    return (
      <ColorBox>
        <ColorText>Color : {props.colors[0].color}</ColorText>
        <Price>${props.price}.95</Price>
        <div>
          {props.colors.map((color) =>
            <ColorEntry color={color}/>
          )}
        </div>
      </ColorBox>
    )
  } else {
    return <h5></h5>
  }
}

export default Colors;
