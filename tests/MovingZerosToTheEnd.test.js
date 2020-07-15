/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 */

Test.assertEquals(
  JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])),
  JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
);
