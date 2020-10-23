
function abbreviateString(str) {
    if (typeof str === 'string' || str instanceof String) {
        const words = str.split(" ");
        const firstWord = words[0];
        const lastWord = words.pop();
        return `${firstWord} ${lastWord[0].toUpperCase()}.`;
    }
    throw "Not a number";
}

export { abbreviateString };
