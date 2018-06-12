'use strict';

const greet = require('./../src/greet');

// this returns null if non-string values are supplied
describe('testing #greet', () => {
    test('should return null when non-string values are supplied', () => {
        expect(greet.hello(' ')).toEqual(null);
        });
    });

