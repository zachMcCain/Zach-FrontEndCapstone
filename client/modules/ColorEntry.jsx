import React from 'react';
import styled from 'styled-components'




const Image = styled.img`
  padding: 5;
  margin-right: 10px;
  border: solid;
  border-color: gray;
  border-width: 3px;
  border-radius: 3px;
  width: 47.5px;
  height: 47.5px;
  border-color: ${props => {
    if (!props.choice) {
      return 'gray'
    }
    if (props.choice === props.name) {
      return '#005fcc'
    } else {
      return 'gray'
    }
  }}
`


function ColorEntry(props) {
  return (
    <Image choice={props.choice} name={props.color.color} onClick={props.select} src={props.color.picture}/>
  )
}


export default ColorEntry;