const { readFile, writeFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);


class Database {

    constructor() {
        this.nomeArquivo = 'herois.json'
    }
    async obterArquivo() {
        const arquivo = await readFileAsync(this.nomeArquivo);
        return JSON.parse(arquivo.toString());
    }
    async escreverArquivos(dadosInserir) {
        await writeFileAsync(this.nomeArquivo, JSON.stringify(dadosInserir));
        return true;

    }
    async list(name) {
        const dados = await this.obterArquivo();
        const [dadosFiltrados] = dados.filter(element => {
            return element.name == name ? true : false;
        })
        return dadosFiltrados;
    }

    async find(id) {
        const dados = await this.obterArquivo();
        const [dadosFiltrados] = dados.filter(element => {
            return element.id == id ? true : false;
        })
        return dadosFiltrados;
    }

    async delete(id) {
        const dados = await this.obterArquivo();
        const novoArrayDeHeroisSemHeroiQueFoiFiltrado = dados.filter(element => {
            return element.id != id ? true : false;
        });
        if (dados.length == novoArrayDeHeroisSemHeroiQueFoiFiltrado.lenght) {
            return false;
        }
        return await this.escreverArquivos(novoArrayDeHeroisSemHeroiQueFoiFiltrado);
    }
    async create(heroi) {
        const arrayDeHeroisComNovoHeroiNele = await this.geradorDeNovoArrayDeHerois(heroi);
        await this.escreverArquivos(arrayDeHeroisComNovoHeroiNele);
        return await this.list(heroi.name);

    }
    async update(heroi) {
        const dados = await this.obterArquivo();
        const [heroiFind] = dados.filter(element => {
            return element.id == heroi.id ? true : false
        });
        if (!heroiFind) {
            return null;
        }
        const dadosNovos = dados.map(element => {
            return element.id == heroi.id ? { name: heroi.name, poder: heroi.poder, id: heroi.id, } : element;

        })
        await this.escreverArquivos(dadosNovos);
        return await this.find(heroiFind.id);;
    }

    geradorDeId(dados) {
        let dadosFiltrados = dados.reduce((anterior, posterior) => {
            return anterior.id > posterior.id ? anterior.id : posterior.id;
        });

        return ++dadosFiltrados;
    }
    geradorDeHeroisComId(heroi, dados) {
        let newId = this.geradorDeId(dados);
        const heroiArray = [];
        heroiArray.push(heroi);
        const [heroiComId] = heroiArray.map(element => {
            return {
                ...element,
                id: newId
            }
        });
        return heroiComId;
    }

    async geradorDeNovoArrayDeHerois(heroi) {
        const dados = await this.obterArquivo(this.nomeArquivo);
        const heroiComId = this.geradorDeHeroisComId(heroi, dados);

        return [
            ...dados,
            heroiComId
        ]

    }
}

module.exports = new Database();