const repeatString = function (input, number) {
    let output = String();
    if (number < 0) {
        return String("ERROR");
    }
    for (let i = 0; i < number; i++) {
        output += String(input);
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
