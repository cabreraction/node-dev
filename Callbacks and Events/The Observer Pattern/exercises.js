import { EventEmitter } from 'events';

const validator = () => {
    const date = Date.now();
    if (date % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

const ticker = (n, cb) => {
    const emitter = new EventEmitter();
    
    let ticks = 1;
    emitter.emit('tick', ticks);

    if (validator()) {
        cb('cb error: time stamp is divisible by five', ticks);
        emitter.emit('error', 'error emit: time stamp divisible by five');
    }

    let counter = 0;
    const emitting = () => {
        if (counter < n) {
            setTimeout(() => {
                counter += 50;
                ticks++;
                emitter.emit('tick', ticks)
                if (validator()) {
                    cb('cb error: time stamp is divisible by five', ticks);
                    emitter.emit('error', 'error emit: time stamp divisible by five');
                }
                emitting();
            }, 50)
        } else {
            cb(ticks);
        }
    }
    emitting();
    return emitter;
}

ticker(800, (error, ticks) => {
    console.error(error);
    console.log()
})
    .on('tick', (ticks) => console.log(`Number of ticks: ${ticks}`))
    .on('error', error => console.log(error));