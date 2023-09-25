const sumAll = function(a, b) {
    let sumNum = 0;

    if (a > b) {
        let numSwap = a;
        a = b;
        b = numSwap;
    }
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "ERROR";
    }
    for (let i = a; i <= b; i++) {
        sumNum += i;
    }
    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
