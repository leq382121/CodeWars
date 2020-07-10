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
