'use strict';

const greet = module.exports = {};

greet.hello = (name) => {
    if (name === ' ' || typeof name != 'string' ) {
        return null;
    };
    if (name === 'Me') {
        return 'I love JS!';
    }
    return `Hello ${name}!`;
};