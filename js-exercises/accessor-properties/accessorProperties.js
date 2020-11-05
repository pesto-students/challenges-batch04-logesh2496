const dec2bin = (dec) => (dec >>> 0).toString(2);

function accessorProperties(...args) {
  return {
    set number(value) {
      this._number = dec2bin(value);
    },
    get number() {
      return this._number;
    }
  }
}

export {
  accessorProperties,
};
