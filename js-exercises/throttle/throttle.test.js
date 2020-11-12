import { throttle } from "./throttle";

describe("throttle", () => {
    let printedOutput;
    beforeEach(() => {
        jest.useFakeTimers();
        printedOutput = null;
    })
    test('Multiple invocation of throttle', () => {
        const throttleFn = throttle((arg) => { printedOutput = arg; }, 5000);
        throttleFn('first');
        throttleFn('second');
        throttleFn('third');
        throttleFn('fourth');
        throttleFn('fifth');
        jest.runAllTimers();
        expect(printedOutput).toBe('first');
        throttleFn('second');
        jest.runAllTimers();
        expect(printedOutput).toBe('second');
    });
    test('consecutive calls after timer', () => {
        const throttleFn = throttle((arg) => { printedOutput = arg; }, 5000);
        throttleFn('first');
        throttleFn('second');
        jest.runAllTimers();
        expect(printedOutput).toBe('first');
        throttleFn('third');
        jest.runAllTimers();
        expect(printedOutput).toBe('third');
        throttleFn('fourth');
        throttleFn('fifth');
        jest.runAllTimers();
        expect(printedOutput).toBe('fourth');
        throttleFn('second');
    })
});
