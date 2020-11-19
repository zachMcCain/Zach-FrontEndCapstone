import React from 'react';
import SizeEntry from './SizeEntry.jsx';
import styled from 'styled-components'


const SizeBoxes = styled.div`
  width: 400px;
`
const SizeBox = styled.div`
  padding: 5px;
`



function Sizes(props) {
  if (props.sizes) {
    return (
      <SizeBox>
        <span>Size    </span>
        <span>    Size Chart</span><br></br>
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
