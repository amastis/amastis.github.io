const url = "https://www.reddit.com/r/LifeProTips/new.json"; //"https://breaking-bad-quotes.herokuapp.com/v1/quotes";
let headers = new Headers({
	"Accept"       : "application/json",
	"User-Agent"   : navigator.userAgent
});

//testing how to fetch json data
fetch(url, {
    method  : 'GET', 
    headers : headers 
}).then(response => response.json())
	.then(data => console.log(data.data.children[0].data.title + "\n" + data.data.children[0].data.url)); //[0].quote));
