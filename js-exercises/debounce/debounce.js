function debounce(fn, timeInMs) {
    if (typeof (fn) !== 'function') {
        throw new Error(`Expected a function but received ${typeof (fn)}.`);
    }

    if (typeof (timeInMs) !== 'number') {
        throw new Error(`Timer should be in milliseconds, but received ${timeInMs}.`);
    }
    let timer;
    let resetTimer = () => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, timeInMs);
    }
    return () => {
        resetTimer();
    }
}

export { debounce };
