import React from 'react';
import SizeEntry from './SizeEntry.jsx';
import styled from 'styled-components'


const SizeBox = styled.div`
  width: 400px;
`


function Sizes(props) {
  if (props.sizes) {
    return (
      <div>
        <span>Size    </span>
        <span>    Size Chart</span><br></br>
        <SizeBox>
          {props.sizes[0].sizes.map((size) =>
            <SizeEntry size={size}/>
          )}
        </SizeBox>
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
}

export default Sizes;
