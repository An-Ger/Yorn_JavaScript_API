function call (fn, obj, ...args) {
    if (obj === undefined || obj === null)
        obj = globalThis;
    //为obj对象添加临时方法
    obj.temp = fn;
    //调用temp方法
    let res = obj.temp(...args);
    //删除temp方法
    delete obj.temp;
    return res;
}