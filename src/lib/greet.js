'use strict';

const greet = module.exports = {};

greet.hello = (world) => {
    if (world === ' ' || typeof world != 'string' ) {
        return null;
    };
    if (world === 'World') {
        return 'Hello ${world}!';
    }
};