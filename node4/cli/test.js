const { ok, deepEqual } = require('assert');
const database = require('./database');

const DEFAULT_JSON_INICIADO = [{ name: 'flash', poder: 'speed', id: 1 }, { name: "batman", poder: "many", id: 2 }]
const DEFAULT_ITEM_BUSCADO = { name: 'flash', poder: 'speed', id: 1 }
const DEFAULT_ITEM_CADASTRADO = { name: 'superman', poder: 'forca' }
const DEFAULT_ITEM_ATUALIZADO = { name: 'superman', poder: 'forca e voo', id: 3 }

describe('Suite de manipulacao de herois', function () {
    this.beforeAll(async () => {
        await database.escreverArquivos(DEFAULT_JSON_INICIADO);
    })
    it('Deve pesquisa um herois usando arquivos', async () => {
        const expected = DEFAULT_ITEM_BUSCADO;
        const results = await database.list('flash');
        deepEqual(results, expected);
    })
    it('Deve cadastrar um Heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRADO;
        const results = await database.create(DEFAULT_ITEM_CADASTRADO);
        ok(results, expected);
    })
    it('Deve remove um Heroi por id, usando arquivos', async () => {
        const expected = true;
        const results = await database.delete(DEFAULT_ITEM_BUSCADO.id);
        ok(results, expected);
    })
    it('Deve atualizar um Heroi por id, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_ATUALIZADO;
        const results = await database.update(DEFAULT_ITEM_ATUALIZADO);
        deepEqual(results, expected);
    })

})