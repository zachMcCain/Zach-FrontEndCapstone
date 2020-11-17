import React from 'react';
import ColorEntry from './ColorEntry.jsx';
import styled from 'styled-components'



const ColorText = styled.div`
  font-size: 12px;
  padding-bottom: 10px;
`

function Colors(props) {

  if (props.colors) {

    return (
      <div>
        <ColorText>Color : {props.colors[0].color}</ColorText>
        <div>${props.price}.95</div>
        <div>
          {props.colors.map((color) =>
            <ColorEntry color={color}/>
          )}
        </div>
      </div>
    )
  } else {
    return <h5></h5>
  }
}

export default Colors;
