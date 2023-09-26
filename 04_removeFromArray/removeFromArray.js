const removeFromArray = function() {

    const originalArray = arguments[0];

    let elementsToRemove = [];

    for (let j = 1; j <= arguments.length - 1; j++) {
        elementsToRemove.push(arguments[j]);
    }

    const finalArray = originalArray.filter(element => !elementsToRemove.includes(element)); 
    //Checks if each element in originalArray is NOT included in the elementsToRemove array. 
    //If it isn't, the condition evaluates to true, and the element is included in the finalArray. 
    //If an element is included in elementsToRemove, the condition evaluates to false, and that element is filtered out.

    return finalArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
