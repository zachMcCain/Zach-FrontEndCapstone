import React from 'react';
import styled from 'styled-components';


const Curb = styled.span`
  padding: 5px;
  font-size: 12px;
  font-family: Graphik, sans-serif;
  color: #225C4E;
  font-weight: 550;
`

const Learn = styled.a`
  color: #3278AE;
  border-bottom: none;
  text-decoration: none;
`

const Car = styled.img`
  color: #225C4E;
  height: 12px;
`

const CurbBox = styled.div`
  margin: 5px;
  border: solid;
  border-width: 1px;
  width: 380px;
  padding: 10px;
`


function Curbside(props) {
  return (
    <CurbBox>
      <Car src="https://img.icons8.com/fluent-systems-regular/24/000000/car.png"/>
      <Curb>Avoid shipping delays, choose Curbside Pickup available at select locations.<br></br><Learn href='http://www.rei.com'>Learn more</Learn></Curb>

    </CurbBox>
  )
}

export default Curbside;
