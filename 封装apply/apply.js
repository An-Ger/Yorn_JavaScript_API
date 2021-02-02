function  apply (fn, obj, args) {
    if(obj === undefined || obj === null)
        obj = globalThis;
    obj.temp = fn;
    let res = obj.temp(...args);
    delete obj.temp;
    return res;
}