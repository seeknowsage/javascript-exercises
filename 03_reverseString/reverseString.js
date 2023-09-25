const reverseString = function(uInput) {
    let uInputLength = uInput.length;
    let uInputReversed = '';
    for(let i = uInputLength - 1; i >= 0; i--) {
        uInputReversed += uInput.charAt(i);
    }
    return uInputReversed;

};

// Do not edit below this line
module.exports = reverseString;
