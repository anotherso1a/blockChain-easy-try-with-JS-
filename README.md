# blockChain-easy-try-with-JS-

### 1 npm install

### 2 npm run test

### 3 在控制台中输入 
```javascript
const Chain = require('./index').Chain.chain
const appendData = require('./index').appendData
//appendData参数:obj:{time:int(可选),data:any(必选)}
appendData({time:Date.now(),data:'这是一条测试数据'})
//添加完成后控制台输入Chain查看结果
Chain
// [ Block {
//     timestamp: 1547014749383,
//     data: 'AnotherSola',
//     previousHash: '0',
//     nonce: 0,
//     hash: '734613413917bd4f86b93bdde182f60ec457e3a3d4f5bd79bdc9cd63b6bfa481' } ]
```
