const NotImplementException = require('./notImplementException');

class ICrud {

    create(item) {
        throw new NotImplementException();
    }
    read(query) {
        throw new NotImplementException();
    }
    delete(id) {
        throw new NotImplementException();
    }
    update(item) {
        throw new NotImplementException();
    }
}

module.exports =ICrud;