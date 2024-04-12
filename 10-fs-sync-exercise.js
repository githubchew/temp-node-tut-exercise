const {readFileSync, writeFileSync} = require('fs');
console.log('start')

const first = readFileSync('girst.txt','utf8')
const second = readFileSync('second.txt','utf8')

writeFileSync(
  'result-sync.txt',
  `here is the result : ${first}, ${second}`,
  {flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')