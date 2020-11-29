import React from 'react';
import ColorEntry from './ColorEntry.jsx';
import styled from 'styled-components'


const ColorBox = styled.div`
  padding: 5px;
`


const ColorText = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
  font-family: "Roboto Condensed", Roboto;
`
const Price = styled.div`
  font-weight: bold;
  padding-bottom: 4px;
  font-size: 14px;
  font-family: Graphik, Roboto, "Helvetica Neue";
`


class Colors extends React.Component {
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
    if (this.props.colors) {

      return (
        <ColorBox>
          <ColorText>Color : {this.state.choice}</ColorText>
          <Price>${this.props.price}.95</Price>
          <div>
            {this.props.colors.map((color) =>
              <ColorEntry select={this.handleSelect} color={color} choice={this.state.choice}/>
            )}
          </div>
        </ColorBox>
      )
    } else {
      return <h5></h5>
    }
  }
}



export default Colors;
