const Block = require("./Block");

class Blockchain {
    constructor() {
        this.chain = [new Block("Abhishek")];
    }

    addBlock(block) {
        this.chain.push(block);
    }
}

module.exports = Blockchain;