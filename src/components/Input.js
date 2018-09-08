import React, { Component } from 'react';

class GetTime extends Component {
  render() {
    return (
      <div className="App-Input">
        <form onSubmit={ this.props.handleChange } className="App-Form">
<div>
          <label>Your pace is: </label>
          <input
            required
            className="Input-field"
            type="number"
            name="minutes"
            min="0"
            max="30"
            onChange={this.props.onChange}/>
          <label>minutes</label>
          <input
            required
            className="Input-field"
            type="number"
            name="seconds"
            min="0"
            max="59"
            onChange={this.props.onChange}/>
          <label>seconds</label>
    </div>
          <input
            type="submit"
            className="Submit-button"
            value="Get time!"
            onSubmit={ this.props.handleChange }/>
        </form>
      </div>
    );
  }
}

export default GetTime;
