const service = require("./service");

Array.prototype.meuMap = function (callback) {
    const novoMap  = [];
    for (let index = 0; index < this.length; index++) {
        const result = callback(this[index]);
        novoMap.push(result);

    }
    return novoMap;
}

async function main() {
    try {
        const result = await service.obterPessoas('e');
        const names  = [];
        result.results.forEach(element => {
            names.push(element.name);
        });

        const namesmap  = result.results.map(element => {
            return element.name;
        });
        const namesmap2 = result.results.map(element => element.name);
        console.log(namesmap);

        const namesmap3 = result.results.meuMap(element => element.name);
        console.log('meu Map', namesmap3);

    } catch (error) {
        console.error('Errro !', error);
    }

}

main();