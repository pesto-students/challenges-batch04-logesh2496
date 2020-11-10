import { debounce } from "./debounce";

describe("debounce", () => {
    test('check multiple calls', () => {
        const fn = jest.fn();
        jest.useFakeTimers();
        const debouncedFn = debounce(fn, 5000);
        debouncedFn();
        debouncedFn();
        debouncedFn();
        debouncedFn();
        expect(fn).not.toBeCalled();
        jest.runAllTimers();
        expect(fn).toBeCalled();
        expect(fn).toHaveBeenCalledTimes(1);
    })
});
