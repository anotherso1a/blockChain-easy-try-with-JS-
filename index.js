const blockChain = require('./src/chain').blockChain
const Block = require('./src/block').Block
let block1 = new Block(Date.now(), {
  msg: 'first Block'
})
blockChain.addBlock(block1)
console.log(JSON.stringify(blockChain))
console.log(JSON.stringify(blockChain.isChainValid()))