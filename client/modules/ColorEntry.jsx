import React from 'react';
import styled from 'styled-components'


const Image = styled.img`
  padding: 5;
  margin-right: 10px;
  border: solid;
  border-color: gray;
  border-width: 1px;
  border-radius: 3px;
  width: 47.5px;
  height: 47.5px;
`


function ColorEntry(props) {
  return (
    <Image src={props.color.picture}/>
  )
}


export default ColorEntry;