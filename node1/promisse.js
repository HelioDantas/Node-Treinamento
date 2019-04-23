
const util = require('util');
const obterEndAsync = util.promisify(buscarUsuario);

function buscarUsuario (callback){
    setTimeout( function () {
       return callback(null,{
           id:1,
           nome:'Alibaba',
           data : new Date()

       }


    )}, 1000);
}

function obterUsuario() {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Alibaba',
                data: new Date()
            });
        }, 1000);
    });
}

function obterTelefone(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '1111',
                dd: '21'
            });

        }, 2000);
    });
}

function obterEnd(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                end: 'efsdfsd',
            });

        }, 2000);
    });

}

obterUsuario()
    .then((usuario) => {
        console.log(usuario);
        obterTelefone(usuario.id)
            .then((telefone) => {
                console.log(telefone);
            })
            .catch((erro) => {
                console.error('2', erro);
            });
        obterEnd(usuario.id)
            .then((end) => {
                console.log('3', end);

            })
            .catch((erro) => {

                console.error('1', erro);
            });
    })
    .catch((erro) => {

        console.error('fdsfsd', erro);
    });