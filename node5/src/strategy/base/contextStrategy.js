import { ICrud } from "./inteface/iCrud";

class contextStrategy extends ICrud {

    database;

    constructor(strategy) {
        this.database = strategy;
    }
    create(item) {
        return this.database.create(item);
    }
    read(query) {
        return this.database.read(query);
    }
    delete(id) {
        return this.database.create(id);
    }
    update(item) {
        return this.database.create(item);
    }
}

module.exports = contextStrategy;