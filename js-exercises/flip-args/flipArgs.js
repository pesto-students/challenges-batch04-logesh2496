function flipArgs(reverseCallback) {
    return (...args) => {
        const reversedArgs = [];
        args.map(char => reversedArgs.unshift(char));
        return reverseCallback(reversedArgs);
    }
}
export {
    flipArgs
}