import { allSettled } from './allSettled';

describe('allSettled', () => {
    test('The function should return a Promise', () => {
        expect(allSettled() instanceof Promise).toBe(true);
    });

    test('Promise call should return an array of values from promises', () => {
        const p1 = new Promise(res => res(1));
        const p2 = 2;
        const p3 = Promise.resolve(3);
        return expect(allSettled([p1, p2, p3])).resolves.toEqual([{ status: 'fulfilled', value: 1 }, { status: 'fulfilled', value: 2 }, { status: 'fulfilled', value: 3 }]);
    });
    test('Promise call should return an array of values from promises', () => {
        const p1 = new Promise(res => res(1));
        const p2 = new Promise((res, rej) => rej('test reject'));
        const p3 = Promise.resolve(3);
        return expect(allSettled([p1, p2, p3])).resolves.toEqual([{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: 'test reject' }, { status: 'fulfilled', value: 3 }]);
    });
});
