/**
 * Take advantage of the caching mechanism of require
 * Stateful instances
 * Very much like creating a singleton (it does not guarantee the uniqueness of 
   the instance across the entire application)
 */

class Counter {
    constructor(name) {
        this.name = name;
        this.count = 0;
    }

    increaseCount = (increaseValue = 1) => {
        this.count = this.count + increaseValue;
        return(this.count);
    }
}

module.exports = new Counter("my counter");