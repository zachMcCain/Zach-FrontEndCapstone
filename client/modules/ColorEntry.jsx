import React from 'react';
import styled from 'styled-components'


const Image = styled.img`
  padding: 5;
  margin-right: 5px;
  border: solid;
  border-color: gray;
  border-width: 1px;
  border-radius: 3px;
  width: 35px;
  height: 35px;
`


function ColorEntry(props) {
  return (
    <Image src={props.color.picture}/>
  )
}


export default ColorEntry;