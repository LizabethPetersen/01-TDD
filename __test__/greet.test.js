'use strict';

const greet = require('./../src/lib/greet');

describe('testing #greet', () => {
    describe('testing #greet.hello', () => {
        test('greet.hello should return Hello World', () => {
            expect(greet.hello('World')).toEqual('Hello World');
        });
    });
});