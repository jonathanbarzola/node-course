const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (data, secondData) => {
    console.log('received');
    console.log(data);
    console.log(secondData);
})

customEmitter.emit('response', 'Hello World!', [1, 2, 3])


/* 
    emit: sirve para poder emitir un evento, cómo si se estuviera dando un "click".
    on: escucha determinado evento, cuando pase algo, hará algo...
*/