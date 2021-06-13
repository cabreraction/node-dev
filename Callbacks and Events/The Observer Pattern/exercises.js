import { EventEmitter } from 'events';

const ticker = (n, cb) => {
    const emitter = new EventEmitter();
    let counter = 0;
    let ticks = 0;
    const emitting = () => {
        if (counter < n) {
            setTimeout(() => {
                counter += 50;
                ticks++;
                emitter.emit('tick')
                emitting();
            }, 50)
        } else {
            cb(ticks);
        }
    }
    emitting();
}

ticker(300, (ticks) => console.log(ticks));