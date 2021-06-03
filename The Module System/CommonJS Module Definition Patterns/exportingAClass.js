/**
 * Similar to substack, but this lets the consumer create new instances and extend the prototype
 */

class Calculator {
    constructor(type) {
        this.type = type;
    }

    add(arg1, arg2) {
        if (this.type === 'decimal')
            console.log(arg1 + arg2);
        else
            console.log('functionality not yet implemented');
    }
}

module.exports = Calculator;