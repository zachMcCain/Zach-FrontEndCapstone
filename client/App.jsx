import React from 'react';
import ReactDOM from 'react-dom';
import Brand from './modules/Brand.jsx'
import Name from './modules/Name.jsx'
import Rating from './modules/Rating.jsx'
import Price from './modules/Price.jsx'
import FreeShip from './modules/FreeShip.jsx'
import MembersSave from './modules/MembersSave.jsx'
import Colors from './modules/Colors.jsx'
import Sizes from './modules/Sizes.jsx'
import Quantity from './modules/Quantity.jsx'
import Curbside from './modules/Curbside.jsx'
import ShipPickUp from './modules/ShipPickUp.jsx'
import Cart from './modules/Cart.jsx'
import Return from './modules/Return.jsx'
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
        id: 2
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
      <div className="productDetailsPanel">
        <Brand brand={this.state.product.product_brand} />
        <Name name={this.state.product.product_name}/>
        <Rating id={this.state.product.product_id}/>
        <Price price={this.state.product.product_price}/>
        <FreeShip />
        <MembersSave price={this.state.product.product_price}/>
        <Colors colors={this.state.product.availability}/>
        <Sizes sizes={this.state.product.availability}/>
        <Quantity />
        <Curbside />
        <ShipPickUp />
        <Cart price={this.state.product.product_price}/>
        <Return />
      </div>
    )
  }

}





export default App;



ReactDOM.render(<App />, document.getElementById('root'));
