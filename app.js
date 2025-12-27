import React from 'react';
import ReactDOM from 'react-dom';


import Home from './home.js';
import Bet from '././bet.js';










class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'main' };
  }


//functions
  goToMain = () => {
    this.setState({ page: 'main' });
  }
alertme() {
  window.alert("hello");
}
 
 
 
 
//displayer
  render() {
    if (this.state.page === 'main') {
      return (
        <div>
          
          <Bet/>
          
          
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
