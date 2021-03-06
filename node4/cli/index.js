const comander = require('commander');
const database = require('./database');
const Heroi = require('./heroi');

async function main() {
    comander
        .version('v1')
        .option('-i, --id [value]', "Id do Heroi")
        .option('-n, --name [value]', "Nome do Heroi")
        .option('-p, --poder [value]', "Poder do Heroi")
        .option('-c, --cadastrar', "Cadastrar o Heroi")
        .option('-l, --lista', "Listar um Heroi")
        .option('-d, --delete', "Deletar um Heroi")
        .option('-u, --update', "Deletar um Heroi")
        .parse(process.argv)

    try {
        const heroi = new Heroi(comander);

        if (comander.cadastrar) {
            const heroiCadastrado = await database.create(heroi);
            if (heroiCadastrado) {
                console.log("Heroi cadastrado",
                    `Nome:  ${heroiCadastrado.name}
                 Poder: ${heroiCadastrado.poder}
                 Id:    ${heroiCadastrado.id}`);
                return;
            }
            console.log("Erro ao cadastrar")
        }
        if (comander.lista) {
            const heroiBuscado = await database.list(heroi.name);
            if (heroiBuscado) {
                console.log("Heroi listado",
                    `Nome:  ${heroiBuscado.name}
                     Poder: ${heroiBuscado.poder}
                     Id:    ${heroiBuscado.id}`);
                return;
            }
            console.log("Erro ao buscar o Heroi");
        }
        if (comander.delete) {
            const heroiDeletado = await database.delete(heroi.id);
            console.log("Heroi deletado")
        }
        if (comander.update) {
            const dado = JSON.stringify(heroi);
            const heroiAtualizar = JSON.parse(dado);
            const heroiAtualizado = await database.update(heroiAtualizar);
            if (heroiAtualizado) {
                console.log(      
                    `heroiAtualizado
                     Nome:  ${heroiAtualizado.name}
                     Poder: ${heroiAtualizado.poder}
                     Id:    ${heroiAtualizado.id}`);
                return;
            }
            console.log('Erro ao atualizar!')
        }

    } catch (error) {
        console.error(error);
    }
}

main();