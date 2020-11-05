class Cycled {
    minLength = 0;
    maxLength;
    get index() {
        return this._index;
    } set index(value) {
        this.calculateAndSetIncOrDecIndex(value, true);
    }
    constructor(values) {
        this._index = 0;
        this.values = values;
        this.maxLength = values.length;
    }
    /*
    0 -5 = 2(1)
    0 -9
    [1, 2, 3][1, 2, 3][1, 2, 3][1, 2, 3][1, 2, 3]
    1 3 = 4
       
    */
    computeIncrements = (increment) => {
        return (increment + this._index) % this.maxLength;
    }
    computeDecrements = (decrement) => {
        return (this.maxLength * Math.ceil(decrement / this.maxLength)) - decrement;
    }
    setIndex = (isNext) => {
        if (isNext) {
            if (this._index === this.maxLength - 1) {
                this._index = this.minLength;
            } else {
                this._index += 1;
            }
        } else {
            if (this._index === this.minLength) {
                this._index = this.maxLength - 1;
            } else {
                this._index -= 1;
            }
        }
    }
    calculateAndSetIncOrDecIndex = (value, isSetFromIndex = false) => {
        if (Math.sign(value) === -1) {
            const decrementValue = this.computeDecrements(value * -1);
            const finalIndex = isSetFromIndex ? decrementValue : decrementValue - 1;
            this._index = finalIndex;
        } else {
            const finalIndex = this.computeIncrements(value);
            this._index = finalIndex;
        }
    }
    current() {
        return this.values[this._index];
    }
    next(isReturnTypeObj) {
        this.setIndex(true);
        if (isReturnTypeObj) {
            return {
                value: this.values[this._index]
            };
        }
        return this.values[this._index];
    }
    previous(isReturnTypeObj) {
        this.setIndex(false);
        if (isReturnTypeObj) {
            return {
                value: this.values[this._index]
            };
        }
        return this.values[this._index];
    }
    step(value) {
        this.calculateAndSetIncOrDecIndex(value);
        return this.values[this._index];
    }
    reversed() {
        return {
            next: this.previous.bind(this, true),
            previous: this.next.bind(this, true)
        };
    }
    indexOf(value) {
        return this.values.findIndex((val) => val === value);
    }
    [Symbol.iterator]() {
        this._index = -1;
        return {
            next: this.next.bind(this, true)
        }
    }
    /* Tried the iterations on destructuring, but unable to complete. Just adding the below part for reference */
    valueOf() {
        return this.values;
    }
    [Symbol.toPrimitive]() {
        return this.values;
    }
}
export { Cycled };
