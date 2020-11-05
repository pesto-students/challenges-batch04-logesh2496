import {
    map,
    filter,
    invert,
    merge,
    all,
    some,
}
    from './objectUtils';

describe('Object Utils', () => {
    test('Map', () => {
        const obj = {
            keyOne: 1,
            keyTwo: 2,
            keyThree: 3,
        };

        const sumTwo = ([key, value]) => ([key, value + 2]);

        expect(map(obj, sumTwo)).toEqual({
            keyOne: 3,
            keyTwo: 4,
            keyThree: 5,
        });
    });

    test('Object filter', () => {
        const obj = {
            one: {
                name: 'one',
                val: false,
            },
            two: {
                name: 'two',
                val: true,
            },
            three: {
                name: 'three',
                val: false,
            }
        };

        const validObj = ([key, value]) => (key && value.val);

        expect(filter(obj, validObj)).toEqual({
            two: {
                name: 'two',
                val: true,
            },
        });
    });

    test('Object invert', () => {
        const testObject = {
            key: 'value',
            keyTwo: 'valueTwo',
        };

        expect(invert(testObject)).toEqual({
            value: 'key',
            valueTwo: 'keyTwo',
        });
    });

    test('Object merge', () => {
        expect(merge({ keyOne: 'valueOne', age: 24 }, { whatever: 'something' }, { blah: '...' })).toEqual({ keyOne: 'valueOne', age: 24, whatever: 'something', blah: '...' });
    });

    test('Object all', () => {
        const obj = {
            objOne: {
                name: 'John',
                part: 1,
            },
            objTwo: {
                name: 'Wick',
                part: 2,
            },
            objThree: {
                name: 'And his dog',
                part: 3,
            },
        };
        const goodParts = ([key, value]) => (key && value.part <= 2);
        expect(all(obj, goodParts)).toBeFalsy();
    });

    test('Object some', () => {
        const obj = {
            objOne: {
                name: 'John',
                part: 1,
            },
            objTwo: {
                name: 'Wick',
                part: 2,
            },
            objThree: {
                name: 'And his dog',
                part: 3,
            },
        };
        const goodParts = ([key, value]) => (key && value.part <= 2);
        expect(some(obj, goodParts)).toBeTruthy();
    });
});