import React, { Component } from 'react';

class GetTime extends Component {
  render() {
    return (
      <div className="App-Input">
        <form onSubmit={ this.props.handleChange } className="App-Form">
          <div>
            <label>If your pace is </label>
            <input
            required
            className="Input-pace"
            type="number"
            name="minutes"
            min="0"
            max="30"
            onChange={this.props.onChange}/>
            <label>minutes</label>
            <input
            required
            className="Input-pace"
            type="number"
            name="seconds"
            min="0"
            max="59"
            onChange={this.props.onChange}/>
            <label>seconds</label>
          </div>
          <div>
            <label>...and the distance is: </label>
            <p>{this.props.distance} km(s)</p>
            {/* <input
              type="number"
              name="distance"
              className="Input-distance"
              value={this.props.distance}
              // onChange={this.props.onChange}
            /> */}
            {/* <label>km(s) </label> */}
          </div>
          <input
            type="submit"
            className="Submit-button"
            value="Gimmi di time!"
            onSubmit={ this.props.handleChange }/>
        </form>
      </div>
    );
  }
}

export default GetTime;
