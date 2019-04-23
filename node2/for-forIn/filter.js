const { obterPessoas } = require("./service");

Array.prototype.meuFilter = function (callback) {
    const lista = [];

    for (index in this) {
        const result = callback(this[index]);
        if (!result) continue;
        lista.push(this[index]);
    }
    return lista;
}

async function main() {
    try {
        const { results } = await obterPessoas('e'); //de dentro do retorno eu quero apenas o atributo results
        const arrayFilter = results.filter(element => {
            if (element.height >= 188) {
                return element;
            }
        })
            .map(pessoa => pessoa.name);
        const familyLars = results.filter(element => {
            //padrao retorna um boleano
            //para informa se deve ou nao fica na lista
            //false > remove da lista
            //true > mantem na lista
            // nao encontrou = -1
            //encontrou posisao do array
            return element.name.toLowerCase().indexOf('lars') !== -1; // filtra que tiver lars
        })
            .map(pessoa => pessoa.name); // retorna só os nome 

        const familyLarsMyFilter = results.meuFilter(element => {
            return element.name.toLowerCase().indexOf('lars') !== -1
        })
            .map(pessoa => pessoa.name);

        console.log('Foi!', arrayFilter);
        console.log('famely lars ', familyLars);


    } catch (error) {
        console.error('Errro !', error);
    }

}

main();


