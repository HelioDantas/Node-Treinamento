import { ICrud } from "./base/inteface/iCrud";

class Postgres extends ICrud {

    database;

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

module.exports = Postgres;