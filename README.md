# eventEmitter

Prueba de funcionamiento:

const emitter = new EventEmitter;
emitter.on('login', (status) => {
    console.log('holiiiii', status)
});

emitter.emit('login', true);
emitter.emit('login', false);
emitter.on('login', (status) => {
    console.log('holiiiii2', status)
});
emitter.emit('login', false);

emitter.emit('login', 'teo es gay!');

emitter.on('login menuShowed', (status,remove) => {
    console.log('estamos en uno multiple', status);

    remove();
})
 