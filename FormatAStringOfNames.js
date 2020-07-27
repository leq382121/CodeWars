function list(names) {
  let newNames = names.reduce((array, item, index) => {

    if (names.length === 1) array.push(item.name)
    else if (index === names.length - 1 && index) array.push(item.name)
    else if (index === names.length - 2) array.push(item.name + ' &')
    else array.push(item.name + ',')

    return array
  }, []);

  return newNames.join(' ')
}

// Best Practices Solution from CodeWars: 
function list(names) {
  return names.reduce(function (prev, current, index, array) {
    if (index === 0) {
      return current.name;
    }
    else if (index === array.length - 1) {
      return prev + ' & ' + current.name;
    }
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}

// Voted Most Clever Solution from CodeWars:
function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}
