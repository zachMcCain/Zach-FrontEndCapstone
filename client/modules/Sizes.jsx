import React from 'react';
import SizeEntry from './SizeEntry.jsx';
import styled from 'styled-components'


const SizeBoxes = styled.div`
  width: 400px;
  margin-top: 10px;
`
const Size = styled.span`
font-family: "Roboto Condensed", Roboto;
float: left;
font-size: 14px;
`

const Chart = styled.span`
font-family: "Roboto Condensed", Roboto;
float: right;
font-size: 14px;
color: #3278AE;
`

const SizeBox = styled.div`
  padding: 5px;
  width: 400px;
  margin-top: 15px;
`



function Sizes(props) {
  if (props.sizes) {
    return (
      <SizeBox>
        <Size>Size</Size>
        <Chart>Size Chart</Chart><br></br>
        <SizeBoxes>
          {props.sizes[0].sizes.map((size) =>
            <SizeEntry size={size}/>
          )}
        </SizeBoxes>
      </SizeBox>
    );
  } else {
    return (
      <div></div>
    )
  }
}

export default Sizes;
