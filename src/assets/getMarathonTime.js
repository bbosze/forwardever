const convertToSeconds = (pace) => {
    let a = pace.split(':');
    let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    return seconds;
  }

export const getMarathonTime = (pace, distance) => {
  let tempoInSeconds = convertToSeconds(pace);
  let fullTimeInSeconds = distance * tempoInSeconds;
  let speed = 3600/tempoInSeconds
  let date = new Date(fullTimeInSeconds * 1000);
  let hh = date.getUTCHours();
  let mm = date.getUTCMinutes();
  let ss = date.getSeconds();
  if (hh < 10) {hh = "0"+hh;}
  if (mm < 10) {mm = "0"+mm;}
  if (ss < 10) {ss = "0"+ss;}
  let result = hh+":"+mm+":"+ss;
  // await this.setState({
  //   result,
  //   speed: parseFloat(speed).toFixed(2),
    return {
      result,
      speed: parseFloat(speed).toFixed(2),
    }
  // })
}
