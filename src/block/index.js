const SHA256 = require('crypto-js/sha256')
class Block {
  constructor(timestamp, data, previousHash = '') {
    this.timestamp = timestamp
    this.data = data
    this.previousHash = previousHash
    this.nonce = 0
    this.hash = this.calcuHash()
  }
  calcuHash() {
    return SHA256(this.timestamp + this.nonce + JSON.stringify(this.data) + this.previousHash).toString()
  }
  mineBlock(difficulty) {
    console.log('adding Block------------------------')
    var t = Date.now()
    while (this.hash.substring(0, difficulty) !== '0'.repeat(difficulty)) {
      this.nonce++;
      this.hash = this.calcuHash();
    }
    t = Date.now() - t
    console.log(`added one Block, coast ${t}ms`);
  }
}
exports.Block = Block