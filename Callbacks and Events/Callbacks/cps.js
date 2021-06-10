// direct style
function add(a, b) {
    return a + b;
}

// continuation passing style
function addCps(a, b, callback) {
    callback(a + b);
}

// synchronous cps
console.log('before');
addCps(1, 2, result => console.log(`Result: ${result}`));
console.log('before');

// cps for async callbacks
function additionAsync (a, b, callback) {
    setTimeout(() => callback(a + b), 500)
}

// asynchronous cps
console.log('before');
additionAsync(a, b, result => console.log(`Result: ${result}`));
console.log('after')
