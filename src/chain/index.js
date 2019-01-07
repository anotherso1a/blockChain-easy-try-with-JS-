const Block = require('../block').Block
class Chain {
  constructor() {
    this.chain = [this.createInitBlock()]
    this.difficulty = 5
  }
  createInitBlock() {
    return new Block(Date.now(), 'AnotherSola', '0')
  }
  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock)
  }
  isChainValid() {
    return this.chain.every((e, i, a) => i === 0 || e.previousHash === a[i - 1].hash) && this.chain.every(e => e.calcuHash() === e.hash)
  }
}
exports.blockChain = new Chain()