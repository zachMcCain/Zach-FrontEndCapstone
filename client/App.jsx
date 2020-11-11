import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 0
    }
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
