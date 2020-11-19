import React from 'react';
import styled from 'styled-components'


const Ship = styled.span`
  font-weight: bold;
`

const Radio = styled.input`
  color: black;
  input: {
    color: black
  }
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
        <Radio type="radio" checked={this.state.ship} onClick={this.onChange}></Radio><Ship>Ship to address</Ship><br></br>
        <Radio type="radio" checked={!this.state.ship} onClick={this.onChange}></Radio><Ship>Pick up at store<br></br><a href='http://www.rei.com'>Find a store near you</a></Ship>
      </div>
    )
  }
}






export default ShipPickUp;
