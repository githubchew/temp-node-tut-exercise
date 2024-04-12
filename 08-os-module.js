const path = require('path')

console.log(path.sep)

const filePath = path.join('mainFolder/','subfolder','filooooLaLaeName.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log('the base is ...')
console.log(base);
const absolute = path.resolve(__dirname,'string','anotherstring','fileName2.txt')
console.log(absolute)