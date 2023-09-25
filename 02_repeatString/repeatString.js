const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let outString = "";
    for(let j = 0; j < num; j++) {
        outString = outString + string;
    }
    return outString;

};

// Do not edit below this line
module.exports = repeatString;
