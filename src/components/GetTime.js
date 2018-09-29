import React, { Component } from 'react';
import Input from './Input';
import { getMarathonTime } from '../assets/getMarathonTime';

class GetTime extends Component {
  state = {
    pace: '00:00:00',
    minutes: 0,
    seconds: 0,
    result: '...',
    kilometers: 0,
    meters: 0,
    distance: 0,
    speed: '...',
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
    else if (name === 'kilometers') {
      await this.setState({
        kilometers: parseInt(value, 10),
      })
    }
    else if (name === 'meters') {
      await this.setState({
        meters: parseInt(value, 10) / 1000,
      })
    }
    if (!await this.state.meters) {
      await this.setState({
        meters: 0,
      })
    }
    if (!await this.state.kilometers) {
      await this.setState({
        kilometers: 0,
      })
    }

    await this.setState({
      pace: `00:${this.state.minutes}:${this.state.seconds}`,
      distance: this.state.kilometers + this.state.meters,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let resultObj = getMarathonTime(this.state.pace, this.state.distance)

    this.setState ({
      result: resultObj.result,
      speed: resultObj.speed,
    })
  }

  render() {
    return (
      <div className="App-Gettime">
        <h1>Get your finishing time!</h1>
        <Input
          onChange={ this.onChange }
          handleChange={ this.handleSubmit }
        />
        <div className="App-Results">
          <div className="Result">Your finishing time will be
            <div className="Result-number">{ this.state.result }</div>
          </div>
          <div className="Result">...and your average speed is
            <div className="Result-number">{ this.state.speed }</div> km/h
          </div>
      </div>
      </div>
    );
  }
}

export default GetTime;
