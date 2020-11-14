import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }


  componentDidMount() {
    // Create axios request for data to update product props
    console.log('Component mounted')
    axios({
      method: 'post',
      url: '/api/products/details',
      data: {
        id: 1
      }
    })
    .then((response) => {
      console.log(response);
      this.setState({product: response.data})
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        {this.state.product.product_brand}
      </div>
    )
  }

}





export default App;



ReactDOM.render(<App />, document.getElementById('root'));
