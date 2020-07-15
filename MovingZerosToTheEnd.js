const moveZeros = (arr) => {
  return [...arr.filter(item => item !== 0), ...arr.filter(item => item === 0)];
}

// Best Solution from CodeWars: 
var moveZeros = function (arr) {
  return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
}
