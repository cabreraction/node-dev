function taskt1 (cb) {
    setTimeout(() => {
        console.log('executing task 1');
        task2(cb);
    }, 1000);
}

function task2 (cb) {
    setTimeout(() => {
        console.log('executing task 2');
        task3(cb);
    }, 1000)
}

function task3 (cb) {
    setTimeout(() => {
        console.log('executing task 3');
        cb();
    }, 1000)
}

taskt1(() => console.log('executing callback'));