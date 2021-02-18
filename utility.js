const url = "https://www.reddit.com/r/LifeProTips/new.json";

//testing how to fetch json data
fetch(url)
	.then(response => response.json())
	.then(data => console.log(data))//.data.children[0].data.title + "\n" + data.data.children[0].data.url));
  .catch(error => console.error(error));
