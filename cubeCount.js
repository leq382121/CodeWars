// Build a pile of Cubes
// Iteration
function findNb(m) {

  let volume = 0;
  let cubes = 0;

  while (true) {
    if (volume !== m) {
      if (volume > m) return (-1);

      volume += Math.pow(cubes, 3);
      cubes++;
    } else {
      return cubes - 1;
    }
  }
}

// Recursion
function findNb(m, blockCount, v) {

  let volume = v || 0;
  if (blockCount === undefined) blockCount = 0;

  if (volume !== m) {
    if (volume > m) return (-1);

    volume += Math.pow(blockCount, 3);
    return findNb(m, blockCount + 1, volume)
  } else {
    return blockCount - 1;
  }
}

// Best Solution from CodeWars: 
function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n ** 3
  return m ? -1 : n
}
