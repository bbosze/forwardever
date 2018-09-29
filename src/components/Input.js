import React, { Component } from 'react';

class GetTime extends Component {
  render() {
    return (
        <form onSubmit={ this.props.handleChange } className="App-Form">
          <label>If your pace is </label>
          <div className="inputcontainer">
            <div className="single-inputfield">
              <input
                required
                className="input"
                type="number"
                name="minutes"
                min="0"
                max="30"
                onChange={this.props.onChange}/>
                <label>minutes</label>
              </div>
              <div className="single-inputfield">
                <input
                  required
                  className="input"
                  type="number"
                  name="seconds"
                  min="0"
                  max="59"
                  onChange={this.props.onChange}/>
                  <label>seconds</label>
              </div>
          </div>
          <label className="distance">...and the distance is: </label>
          <div className="inputcontainer">
            <div className="single-inputfield">
              <input
                type="number"
                name="kilometers"
                className="input"
                value={this.props.distance}
                onChange={this.props.onChange}
              />
              <label>kilometer(s) </label>
            </div>
            <div className="single-inputfield">
              <input
                type="number"
                name="meters"
                className="input"
                value={this.props.distance}
                onChange={this.props.onChange}
              />
              <label>meter(s) </label>
            </div>
          </div>
          <input
            type="submit"
            className="Submit-button"
            value="Gimmi di time!"
            onSubmit={ this.props.handleChange }/>
        </form>
    );
  }
}

export default GetTime;
