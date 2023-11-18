import React, {Component} from 'react';
import ShoutInput from './shoutinput';
import ShoutOutput from './ShoutOutput';
import './style.css';

class Appp extends Component {

  state = {
    currentshout:""
  }

  updateShoutHandler = (event) => {
    this.setState({currentshout: event.target.value})
  };
  render() {
    return (
      <div className="App">
        <h2>Hello world</h2>

        <ShoutInput
        changed={this.updateShoutHandler}
        />

        <ShoutOutput
        shout={(this.state.currentshout).toUpperCase()}
        />
      </div>
    );
  }
}

export default Appp;