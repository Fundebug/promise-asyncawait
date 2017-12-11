const Promise = require("bluebird")
var readFile = Promise.promisify(require("fs").readFile)

// 使用Promise
function usePromise()
{
    let a
    readFile("a.txt", "utf8")
        .then(tmp =>
        {
            a = tmp
            return readFile("b.txt", "utf8")
        })
        .then(b =>
        {
            let result = a + b
            console.log(result) // 输出"Hello, Fundebug!"
        })

}

// 使用Async/Await
async function useAsyncAwait()
{
    let a = await readFile("a.txt", "utf8")
    let b = await readFile("b.txt", "utf8")
    let result = a + b
    console.log(result) // 输出"Hello, Fundebug!"
}

usePromise()
useAsyncAwait()