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



async function main() {
    try {
        console.time('ini');
            const usuario = await obterUsuario();
            const tel = await obterTelefone(usuario.id);
            const end = await obterEnd(usuario.id);

            console.log(usuario);
            console.log(tel);
            console.log(end);
        console.timeEnd('ini');

    } catch (error) {
        console.error('ERRO', erro);
    }

}
async function main2() {
    try {
        console.time('ini');
            const usuario = await obterUsuario();
            const result = await Promise.all([
                obterTelefone(usuario.id),
                obterEnd(usuario.id)
            ])
            console.log(usuario);
            console.log(result[0]);
            console.log(result[1]);
        console.timeEnd('ini');

    } catch (error) {
        console.error('ERRO', erro);
    }

}
main2();