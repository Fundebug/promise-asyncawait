const Promise = require("bluebird");
var readFile = Promise.promisify(require("fs").readFile);

// 使用Promise
function usePromise() {
	readFile("a.txt", "utf8")
	.then(a => {
		console.log(a);
	})
}

// 使用Async/Await
async function useAsyncAwait() {
	var a = await readFile("a.txt", "utf8");
	console.log(a);
}

usePromise();
useAsyncAwait();
