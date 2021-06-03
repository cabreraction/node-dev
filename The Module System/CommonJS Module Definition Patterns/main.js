const namedExports = require('./namedExports');
const substack = require('./substack');
const Calculator = require('./exportingAClass');
require('./mockeyPatching');
const counter = require('./exportingAnInstance');

const namedExportsExecution = () => {
    namedExports.firstNamed("Hello, World!");
    namedExports.secondNamed(1, 1);
}

const substackExecution = () => {
    substack("Hello, Substack");
    substack.echoTwice("Substack echo twice");
}

const CalculatorExecution = () => {
    const decimalCalculator = new Calculator('decimal');
    const binariCalculator = new Calculator('binary');
}

const counterExecution = () => {
    console.log(counter.name);
    console.log(counter.increaseCount());
    console.log(counter.name);
    console.log(counter.increaseCount(31));
}

const main = () => {
    namedExportsExecution();
    substackExecution();
    CalculatorExecution();
    counterExecution();
    counter.decreaseValue();
};

main();