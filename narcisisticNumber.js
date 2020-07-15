function narcissistic(value) {
  const digits = value.toString().split('').map(Number);
  const sum = digits.reduce((accumulator, current) => accumulator + Math.pow(current, digits.length), 0)

  return value === sum
}

// Best Solution from CodeWars: 
function narcissistic(value) {
  return ('' + value).split('').reduce(function (p, c) {
    return p + Math.pow(c, ('' + value).length)
  }, 0) == value;
}
