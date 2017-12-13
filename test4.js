const Promise = require("bluebird")
var readFile = Promise.promisify(require("fs").readFile)

// 没有Async
function withoutAsync()
{
    let b = await readFile("b.txt", "utf8") // 报错"SyntaxError: Unexpected identifier"
    console.log(b) 
}

// 没有await
async function withoutAwait()
{
    let b = readFile("b.txt", "utf8")
    console.log(b) // 打印"Promise..."
}

withoutAsync()
withoutAwait()