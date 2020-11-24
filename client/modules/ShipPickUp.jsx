import React from 'react';
import styled from 'styled-components'


const Ship = styled.span`
  font-weight: bold;
  font-size: 16px;
  font-family: Stuart, Georgia, serif;
  color: #292929;
  padding-bottom: 5px;
  margin-top: 10px;
`

const Radio = styled.input`
  color: black;
  input: {
    color: black
  }
`

const Find = styled.a`
  font-size: 16px;
  font-family: Graphik, Roboto, "Helvetica Neue";
  text-decoration: none;
  padding-left: 22px;
  color: #3278AE;
`

const Box = styled.div`
  padding: 10px;
`

class ShipPickUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ship: true
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange() {
    this.setState({ship: !this.state.ship})
  }

  render() {
    return (
      <div>
        <Box><Radio type="radio" checked={this.state.ship} onClick={this.onChange}></Radio><Ship>Ship to address</Ship></Box>
        <Box><Radio type="radio" checked={!this.state.ship} onClick={this.onChange}></Radio><Ship>Pick up at store</Ship><br></br><Find href='http://www.rei.com'>Find a store near you</Find></Box>
      </div>
    )
  }
}






export default ShipPickUp;
