import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }


  componentDidMount() {
    // Create axios request for data to update product props
    axios.get('/')
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }

}





export default App;



ReactDOM.render(<App />, document.getElementById('root'));
