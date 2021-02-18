const url = "https://www.reddit.com/r/LifeProTips/new.json";

let headers = new Headers({
    "Accept"       : "application/json",
    "Content-Type" : "application/json",
    "User-Agent"   : navigator.userAgent
});

//testing how to fetch json data
fetch(url, {
    method  : 'GET', 
    headers : headers 
}).then(response => response.json())
	.then(data => console.log(data.data.children[0].data.title + "\n" + data.data.children[0].data.url))
	.catch(error => console.error(error));
