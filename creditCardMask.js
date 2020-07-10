// return masked string
function maskify(cc) {
  let symbolsToChange = cc.length - 4;

  if (symbolsToChange >= 1) return '#'.repeat(symbolsToChange) + cc.substr(symbolsToChange);

  return cc
}

// Best Solution from CodeWars: 
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
