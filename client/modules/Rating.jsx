import React from 'react';
import styled from 'styled-components'


const Stars = styled.span`
  color: green;
`



function Rating(props) {
  return(
    <div>
      <Stars>{String.fromCharCode(9734)} &#9734; &#9734; &#9734; &#9734; </Stars>
      <span> Item #{props.id}</span>
    </div>
  )
}

export default Rating;
