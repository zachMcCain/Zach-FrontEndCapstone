import React from 'react';
import styled from 'styled-components'

const SizeBox = styled.p`
  display: inline-block;
  margin: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-botton: 15px;
  width: 60 px;
  border: solid;
  border-radius: 3px;
  border-color: gray;
  border-width: 1px;
  font-family: Graphik, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
`

function SizeEntry(props) {
  return<SizeBox>{props.size}</SizeBox>
}

export default SizeEntry;