import React from 'react';
import SizeEntry from './SizeEntry.jsx';
import styled from 'styled-components'


const SizeBoxes = styled.div`
  width: 400px;
  margin-top: 10px;
`
const Size = styled.span`
font-family: "Roboto Condensed", Roboto;
float: left;
font-size: 14px;
`

const Chart = styled.span`
font-family: "Roboto Condensed", Roboto;
float: right;
font-size: 14px;
color: #3278AE;
`

const SizeBox = styled.div`
  padding: 5px;
  width: 400px;
  margin-top: 15px;
`


class Sizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: ''
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    this.setState({choice: e.target.name});
  }

  render() {
    if (this.props.sizes) {
      return (
        <SizeBox>
          <Size>Size : {this.state.choice}</Size>
          <Chart>Size Chart</Chart><br></br>
          <SizeBoxes>
            {this.props.sizes[0].sizes.map((size) =>
              <SizeEntry select={this.handleSelect} choice={this.state.choice} size={size}/>
            )}
          </SizeBoxes>
        </SizeBox>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}



export default Sizes;
