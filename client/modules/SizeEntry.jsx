import React from 'react';
import styled from 'styled-components'

const SizeBox = styled.button`
  display: inline-block;
  margin-right: 6px;
  margin-bottom: 12px;
  margin-left: 6px;
  margin-top: 0px;
  width: 68px;
  height: 35px;
  border: solid;
  border-radius: 3px;
  border-color: #c5c5c5;
  border-width: 1px;
  font-family: Graphik, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 300;
  background-color: #FFFFFF
`

function SizeEntry(props) {
  return<SizeBox>{props.size}</SizeBox>
}

export default SizeEntry;