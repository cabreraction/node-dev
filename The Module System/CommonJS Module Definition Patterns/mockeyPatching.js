/**
 * Modify existing objects at runtime to change or extend their behavior
 * Usuarlly considered a bad practice but useful in some scenarios
 */

require('./exportingAnInstance').decreaseValue = function(decreaseValue = 1) {
    console.log('not sure but ok');
}