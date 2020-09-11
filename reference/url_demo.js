const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URl
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Host (does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Param objects
console.log(myUrl.searchParams);

// Add Param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through the Param
myUrl.searchParams.forEach((value, name) => {
	console.log(`${name}: ${value}`);
});
