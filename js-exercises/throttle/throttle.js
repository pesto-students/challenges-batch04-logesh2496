function throttle(fn, timeInMs) {
    if (typeof (fn) !== 'function') {
        throw new Error(`Expected callback to be a function, but received: ${typeof (fn)}`)
    }
    if (typeof (timeInMs) !== 'number') {
        throw new Error(`Expceted time in milliseconds, but received: ${typeof (timeInMs)}`);
    }
    let timer;
    let callback;
    return (...args) => {
        clearTimeout(timer);
        if (!callback) {
            callback = fn.bind(this, ...args);
        }
        timer = setTimeout(() => {
            callback();
            callback = null;
        }, timeInMs);
    }
}
export { throttle };
