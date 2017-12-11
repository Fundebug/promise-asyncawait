const Promise = require("bluebird")
var readFile = Promise.promisify(require("fs").readFile)
var files = ["a.txt", "b.txt"]

// 使用Promise
function usePromise()
{
    Promise.map(files, file =>
        {
            return readFile(file, "utf8")
        })
        .then(results =>
        {
            console.log(results)
        })
}

// 使用Async/Await
async function useAsyncAwait()
{
    var results = await Promise.map(files, file =>
    {
        return readFile(file, "utf8")
    })
    console.log(results)
}

usePromise()
useAsyncAwait()