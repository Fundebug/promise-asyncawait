const Promise = require("bluebird")
var readFile = Promise.promisify(require("fs").readFile)

// 使用Promise
function usePromise()
{
    readFile("b.txt", "utf8")
        .then(b =>
        {
            console.log(b)
        })
}

// 使用Async/Await
async function useAsyncAwait()
{
    var b = await readFile("b.txt", "utf8")
    console.log(b) // 输出"Fundebug!"
}

usePromise()
useAsyncAwait()