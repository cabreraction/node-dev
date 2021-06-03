/**
 * Allows you to expose a single functionality
 * Single entry point; simple to understand and use
 * AKA substack pattern
 */

module.exports = (message) => {
    console.log(`echo: ${message}`);
}

/**
 * A combination of substack and named exports would look like:
 */
module.exports.echoTwice = (message) => {
    console.log(`first echo: ${message}`);
    console.log(`second echo: ${message}`);
}