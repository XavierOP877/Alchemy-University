const Block = require("./Block");

class Blockchain {
    constructor() {
        this.chain = [new Block("Abhishek")];
    }
}

module.exports = Blockchain;