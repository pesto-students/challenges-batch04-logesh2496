const allPromises = args => {
    if (!args) {
        return Promise.reject('undefined is not iterable');
    }
    const promise = new Promise((resolve, reject) => {
        const values = new Array(args.length);
        let noOfPromisesCompleted = 0;
        args.map((p, i) => {
            if (p instanceof Promise) {
                p.then(res => {
                    noOfPromisesCompleted++;
                    values[i] = res;
                    if (noOfPromisesCompleted === args.length) {
                        resolve(values);
                    }
                });
                p.catch(e => reject(e));
            } else {
                noOfPromisesCompleted++;
                return values[i] = p;
            }
        });
    });
    return promise;
};

export { allPromises };
