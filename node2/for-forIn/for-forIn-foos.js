const service = require("./service");

service.obterPessoas('a')
    .then((result) => {
        for (let index = 0; index < result.length; index++) {
            let element = result[index];
            console.log(element, index);
        }

    })
    .catch((erro) => {

        console.error('err', erro);
    });

async function main() {

    try {

        const result = await service.obterPessoas('a');
        const names  = [];
        for (let index = 0; index < result.results.length; index++) {
            const pessoa = result.results[index];
            names.push(pessoa.name);
        }
        
        for (const key in result.results) {
            const pessoa = result.results[key];
            names.push(pessoa.name);
        }

        for (const pessoa of result.results) {
            names.push(pessoa.name);
        }
        console.log(names);
    } catch (error) {
        console.error('err1', error);
    }
}

main();
