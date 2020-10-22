import { flipArgs } from './flipArgs';

describe('Flip an array elements', () => {
    it('Callback is invoked', () => {
        const mockFn = jest.fn();
        var flipped = flipArgs(mockFn);
        flipped('a', 'b');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
    it('Check with an array', () => {
        const mockFn = jest.fn();
        const expected = ['a', 'b', 'c', 'd'];
        flipArgs(mockFn)(...expected);
        expect(mockFn).toBeCalledWith(expected.reverse());
    });
    it('Check with an array and some duplicate letters', () => {
        const mockFn = jest.fn();
        const expected = ['a', 'b', 'c', 'd', 'a', 'c'];
        flipArgs(mockFn)(...expected);
        expect(mockFn).toBeCalledWith(expected.reverse());
    });
})