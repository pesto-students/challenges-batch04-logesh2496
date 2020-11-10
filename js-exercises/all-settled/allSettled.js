const allSettled = args => {
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
                    values[i] = { status: 'fulfilled', value: res };
                    if (noOfPromisesCompleted === args.length) {
                        resolve(values);
                    }
                });
                p.catch(e => {
                    noOfPromisesCompleted++;
                    values[i] = { status: 'rejected', reason: e };
                    if (noOfPromisesCompleted === args.length) {
                        resolve(values);
                    }
                });
            } else {
                noOfPromisesCompleted++;
                return values[i] = { status: 'fulfilled', value: p };
            }
        });
    });
    return promise;
};
export { allSettled };
