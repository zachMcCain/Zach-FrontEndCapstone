import React from 'react';
import styled from 'styled-components'
import Star from './Star.jsx';


const Stars = styled.p`
  color: #478eff;
  padding: 0px;
  float: left;
  margin-bottom: 0px;
  font-size: 24px;
  margin-top: 10px;
  margin-left: 5px;
`

const Rate = styled.p`
  color: #292929;
  padding: 0px;
  float: left;
  margin-bottom: 0px;
  font-size: 14px;
  margin-top: 20px;
  margin-left: 10px;
  font-family: Graphik, Roboto, "Helvetica Neue";
`

const Item = styled.p`
  font-family: "Roboto Condensed", Roboto;
  float: right;
  margin-top: 20px;
`

const TextBox = styled.div`
  clear: both;
  width: 400px;;
`

const GoodStars = styled.div`

`


function Rating(props) {
  return(
    <TextBox>
      {function() {
        let stars = [];
        for (var i = 1; i <= 5; i++) {
          if (i <= props.rating) {
            stars.push(<Star full={true}/>)
          } else {
            stars.push(<Star full={false}/>)
          }
        }
        return stars;
      }()}
      <Rate>{props.rating} | ({props.ratings})</Rate>
      <Item> Item #{props.id}</Item>
    </TextBox>
  )
}

export default Rating;

