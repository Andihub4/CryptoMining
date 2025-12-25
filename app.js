import React from 'react';
import ReactDOM from 'react-dom';

import Hate from './Loves.js'
import Phar from './phar.js'
import Second from './Second.js'










class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'main' };
  }

  goToMain = () => {
    this.setState({ page: 'main' });
  }
alertme() {
  window.alert("hello");
}
 

  render() {
    if (this.state.page === 'main') {
      return (
        <div>
          <Phar/>
          <h2>Main Page</h2>
          
          <button onClick={this.alertme}>alertme</button>
        </div>
      );
      
      
    }

   
    return <div>Error</div>;
  }
}
















class Title extends React.Component {
  render() {
    return (<h1 className="">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="">
      {this.props.text}
      </p>
      
    )
  }
}


/**ReactDOM.render(
 < Main title="" text=""></Main>,
  document.getElementById('react-app')**/
  ReactDOM.render(<App />, document.getElementById("react-app")

);
