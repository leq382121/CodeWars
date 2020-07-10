// Human Readable Time
function humanReadable(seconds) {
  if (seconds > 359999) return;

  let clockHours = Math.floor(seconds / 3600),
    clockMinutes = Math.floor((seconds - (clockHours * 3600)) / 60),
    clockSeconds = seconds - (clockHours * 3600) - (clockMinutes * 60);

  clockHours = clockHours < 10 ? '0' + clockHours : clockHours;
  clockMinutes = clockMinutes < 10 ? '0' + clockMinutes : clockMinutes;
  clockSeconds = clockSeconds < 10 ? '0' + clockSeconds : clockSeconds

  return clockHours + ':' + clockMinutes + ':' + clockSeconds
}

// Best Solution from CodeWars: 
function humanReadable(seconds) {
  var pad = function (x) {
    return (x < 10) ? "0" + x : x;
  }
  return pad(parseInt(seconds / (60 * 60))) + ":" +
    pad(parseInt(seconds / 60 % 60)) + ":" +
    pad(seconds % 60)
}
