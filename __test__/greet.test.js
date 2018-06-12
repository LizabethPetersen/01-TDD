'use strict';

const greet = require('./../src/lib/greet');

describe('testing #greet', () => {
    test('greet.hello should return Hello World', () => {
        expect(greet.hello('World')).toEqual('Hello World!');
        });
        // error checking test
        test('should return null for empty string or non-string response', () => {
            expect(greet.hello(' ')).toBe('Null');
        });
    });
