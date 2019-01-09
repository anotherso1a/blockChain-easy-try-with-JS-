const blockChain = require('./src/chain').blockChain
const Block = require('./src/block').Block
const appendData = (obj) => {
  let block = new Block(
    obj.time || Date.now(),
    obj.data
  )
  blockChain.addBlock(block)
}
exports.appendData = appendData
exports.Chain = blockChain