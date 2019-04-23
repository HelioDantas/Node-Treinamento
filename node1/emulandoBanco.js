const util = require('util');

const obterEndAsync = util.promisify(buscarUsuario);

function buscarUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Alibaba',
            data: new Date()

        }


        )
    }, 1000);
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