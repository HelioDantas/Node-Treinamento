const { obterPessoas } = require("./service");

Array.prototype.myReduce = function(callback, valorInicial) {
    let valorFinal = typeof valorInicial == undefined ? valorInicial : this[0];
    for (let index = 1; index < this.length; index++) {
        valorFinal = callback(valorFinal, this[index], this);
        
    }
    return valorFinal;
};
async function main() {
    try {
        const { results } = await obterPessoas('e');
        const pesos       = results.map(element => parseInt(element.height));
        const somaPesos   = pesos.reduce((anterior, proximo) =>{
            return anterior + proximo;
        });

        const somaPesos2  = pesos.myReduce((anterior, proximo) =>{
            return anterior + proximo;
        });

        console.log(somaPesos, pesos);
        console.log('Meu reduce',somaPesos2, pesos);
    } catch (error) {
        console.error('Erro !', error);
    }

}

main();