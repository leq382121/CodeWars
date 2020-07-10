// My solution
function tribonacci(signature, n) {
  if (n === 0) return [];
  if (n === 1) return [signature[n - 1]];
  if (n === 2) return [signature[n - 2]];

  const signatureLength = signature.length;

  for (i = 0; i < n - signatureLength; i++) {
    signature.push(
      signature[signature.length - 1] +
      signature[signature.length - 2] +
      signature[signature.length - 3]
    )
  }

  return signature;
}

// Best Solution from CodeWars: 
function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) { // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
