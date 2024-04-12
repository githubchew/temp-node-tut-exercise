const {readFile, writeFile} = require('fs')

console.log('start');

readFile('girst.txt','utf8',(err,result)=>{
  if (err) {
    console.log(err)
    return
  }
const first = result
readFile('second.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  const second = result
  writeFile(
    'result-async.txt',
    `here is the ressult : ${first}, ${second}`,
    (err, result) =>{
      if(err) {
        console.log(err)
        return
      }
      console.log('done with this write task')
    }
  )
})

} )

console.log('starting next task')