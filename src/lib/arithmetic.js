'use strict';

const a = 5;
const b = 20;

const add = () => {
  if (a === '' || b === '') {
    throw new Error('Unable to complete operation');
  } else {
    return add(a + b);
  }
};
