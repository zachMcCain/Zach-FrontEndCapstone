import React from 'react';
import SizeEntry from './SizeEntry.jsx';



function Sizes(props) {
  if (props.sizes) {
    return (
      <div>
        <span>Size    </span>
        <span>    Size Chart</span><br></br>
        {props.sizes[0].sizes.map((size) =>
          <SizeEntry size={size}/>
        )}
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
}

export default Sizes;
