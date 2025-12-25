import React from 'react';

class Second extends React.Component {
  render() {
    return (
      <div>
        <h2>Second Page</h2>

        <button onClick={this.props.goBack}>
          Back to Main
        </button>
      </div>
    );
  }
}

export default Second;