/**
 * The most basic of patterns is named exports
 * It is the only one that is really compatible with CommonJS specification 
 */

exports.firstNamed = (arg) => {
    console.log(arg);
}

exports.secondNamed = (arg1, arg2) => {
    console.log(arg1 + arg2);
}