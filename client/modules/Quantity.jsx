import React from 'react';
import styled from 'styled-components'


const NumInput = styled.input`
  width: 38px;
  height: 28px;
  padding: 5px;
  border-radius: 3px;
  border-width: 1px;
  border-color: #c5c5c5;
  line-height: 1;
  font-size: 16px;
  font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  text-align: center;
`

const PlusMinus = styled.input`
  // size: 10px;
  // width: 10px;
  border-radius: 50%;
  border-width: 1px;
  background-color: #EFEFEF;
  border-color: #c5c5c5;
  // padding: 5px;
  margin: 5px;
  font-size: 15px;
  text-decoration: none;
  outline: none;
`
const ButtonWrapper = styled.div`
  width: 180px;
  height: 40px;
`
const Label = styled.div`
  color: #292929;
  font-size: 14px;
  font-family: "Roboto Condensed", Roboto, sans-serif;
  margin: 5px;
  margin-top: 15px;
`

const Line = styled.hr`
  width: 400px;
  margin-left: 5px;
  margin-top: 30px;
  margin-bottom: 20px;
`


class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    }

    this.onPlus = this.onPlus.bind(this);
    this.onMinus = this.onMinus.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onPlus() {
    this.setState({number: this.state.number += 1})
  }

  onMinus() {
    if(this.state.number > 1) {
      this.setState({number: this.state.number -= 1})
    }
  }

  onChange(e) {
    console.log(typeof 1);
    console.log(typeof e.target.value);
    if (e.target.value > 0) {
      this.setState({number: parseInt(e.target.value)});
    } else {
      this.setState({number: ''})
    }
  }

  render () {
    return (
      <div>
      <div>
        <Label>
          Quantity
        </Label>
        <ButtonWrapper>
          <PlusMinus type="button" value="-" onClick={this.onMinus}/><NumInput onChange={this.onChange} type="text" value={this.state.number}/><PlusMinus type="button" value="+" onClick={this.onPlus}/>
        </ButtonWrapper>
      </div>
      <Line></Line>
      </div>
    )
  }
}



export default Quantity;
