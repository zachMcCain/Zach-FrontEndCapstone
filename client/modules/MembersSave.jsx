import React from 'react';
import styled from 'styled-components';

const Save = styled.h5`
  font-weight: normal;
  padding: 5px;
  font-family: Graphik, Roboto, "Helvetica Neue";
  font-size: 16px;
`

const Member = styled.a`
  font-weight: normal;
  color: #478eff;
`

const Ammount = styled.span`
  font-weight: bold;
`

function MembersSave(props) {
  return<Save>REWhy Members get back an estimated <Ammount>${Math.floor(props.price * .10)}.00</Ammount> on this item as part of the <Member href='http://www.rei.com'>member dividend</Member>.</Save>;
}

export default MembersSave;
