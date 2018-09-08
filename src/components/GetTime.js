import React, { Component } from 'react';
import Input from './Input'

class GetTime extends Component {
  state = {
    pace: '00:00:00',
    minutes: 0,
    seconds: 0,
    result: '...',
    distance: 42.195,
  }

  convertToSeconds = (pace) => {
    let a = pace.split(':');
    let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    return seconds;
  }

  getMarathonTime = async() => {
    await this.setState({
      pace: `00:${this.state.minutes}:${this.state.seconds}`
    })
    let tempoInSeconds = this.convertToSeconds(this.state.pace);
    let fullTimeInSeconds = this.state.distance * tempoInSeconds;
    let date = new Date(fullTimeInSeconds * 1000);
    let hh = date.getUTCHours();
    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();
    if (hh < 10) {hh = "0"+hh;}
    if (mm < 10) {mm = "0"+mm;}
    if (ss < 10) {ss = "0"+ss;}
    let result = hh+":"+mm+":"+ss;
    await this.setState({
      result,
    })
  }

  onChange = async (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === 'minutes' && parseInt(value, 10) <= 30) {
      await this.setState({
        minutes: parseInt(value, 10),
      })
    }
    else if (name === 'minutes' && parseInt(value, 10) > 30) {
      await this.setState({
        minutes: 0,
      })
    }
    else if (name === 'seconds' && parseInt(value, 10) < 60) {
      await this.setState({
        seconds: parseInt(value, 10),
      })
    }
    else if (name === 'seconds' && parseInt(value, 10) <= 60) {
      await this.setState({
        seconds: 0,
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getMarathonTime();
  }

  render() {
    return (
      <div className="App-Gettime">
        <Input
          onChange={ this.onChange }
          handleChange={ this.handleSubmit }
          minutes={this.state.minutes}/>
        <h2>Your marathon time is { this.state.result }</h2>
      </div>
    );
  }
}

export default GetTime;
