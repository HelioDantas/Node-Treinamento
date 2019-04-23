const EventEmitter = require('events');

class MeuEmisso extends EventEmitter {


}

const meuEmisso  =  new MeuEmisso();
const nomeEvento = 'usuario:click';
meuEmisso.on(nomeEvento, (click) => {
    console.log('Um', click);
});


meuEmisso.emit(nomeEvento, 'barra de rolagem');
meuEmisso.emit(nomeEvento, 'no ok!');

let count = 0;
setInterval(() => {
    meuEmisso.emit(nomeEvento, 'no ok!' + count++);

}, 1000);




const stdin = process.openStdin()
stdin.addListener('data', (value) => {
    console.log('Você digitou', value.toString().trim());

})