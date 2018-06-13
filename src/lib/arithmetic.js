'use strict';

let a = num1;
let b = num2;

const add = () => {
  if (num1 == NaN || num2 == NaN) {
    throw new Error('Unable to complete operation');
  } else {
    return add (a + b);
  };
}